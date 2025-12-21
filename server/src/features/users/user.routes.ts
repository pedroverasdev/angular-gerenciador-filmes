import { Router } from 'express';
import { UserController } from './user.controller';

const router = Router();
const userController = new UserController();

// Usamos .bind(userController) para não perder o contexto do 'this'
router.post('/', userController.register.bind(userController)); // POST /users
router.post('/login', userController.login.bind(userController)); // POST /users/login

export const userRoutes = router;
