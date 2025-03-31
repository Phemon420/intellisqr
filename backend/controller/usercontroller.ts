import prisma from "../DB/db.config.ts";
import { Request, Response } from "express";

// Helper function to enforce timeout
const withTimeout = <T>(promise: Promise<T>, timeoutMs: number): Promise<T> => {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error("Database request timeout")), timeoutMs)
    ),
  ]);
};

const userController = { 
  login_check: async (req: Request, res: Response): Promise<any> => {
    try {
      const { email, password } = req.body;

      // Enforce a 5-second timeout
      const user = await withTimeout(
        prisma.user.findUnique({
          where: { email },
        }),
        5000
      );

      if (!user) {
        return res.status(400).json({
          success: false,
          error: "User not found",
        });
      }

      // Compare password directly (⚠ Not secure, use bcrypt in production)
      if (user.password !== password) {
        return res.status(401).json({
          success: false,
          error: "Invalid credentials",
        });
      }

      // If successful, send a success response
      return res.status(200).json({
        success: true,
        user: { id: user.id, email: user.email },
      });

    } catch (error: any) {
      console.error("Login error:", error);

      // Handle timeout errors
      if (error.message === "Database request timeout") {
        return res.status(503).json({
          success: false,
          error: "Database request timeout. Please try again.",
        });
      }

      return res.status(500).json({
        success: false,
        error: "An unexpected error occurred during login",
      });
    }
  }
  
};

export default userController;
