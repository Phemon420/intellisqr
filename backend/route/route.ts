import express from 'express';
import userController  from '../controller/usercontroller.ts';

const router = express.Router();

// Auth routes

router.post("/login", userController.login_check);
router.post("/register", userController.register);



export default router;