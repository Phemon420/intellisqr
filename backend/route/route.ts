import express from 'express';
import userController  from '../controller/usercontroller.ts';

const router = express.Router();

// Auth routes
// router.post('/login', userController);

// router.post("/login", async (req, res) => userController(req, res)); 

router.post("/login", userController.login_check);


export default router;