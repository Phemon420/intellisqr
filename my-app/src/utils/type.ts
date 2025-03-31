import type { z } from "zod"
import type { loginSchema } from "./schema"

export type LoginFormValues = z.infer<typeof loginSchema>

export interface LoginResponse {
  success: boolean
  message: string
  token?: string
  user?: {
    id: string
    email: string
    name?: string
  }
}