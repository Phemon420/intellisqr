import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import router from './route/route.ts';

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(express.json());
app.use(cors());

// Register routes
app.use('/', router);

// Server setup
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { prisma };