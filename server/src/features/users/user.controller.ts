// Responsável por lidar com Requisição HTTP, Resposta e Orquestração do JWT.

import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserService } from './user.service';
import { User, UserResponse } from './user.interface';

const userService = new UserService();
const JWT_SECRET = 'minha_chave_secreta_super_segura';

export class UserController {
  // REGISTRO
  async register(req: Request, res: Response): Promise<void> {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ message: 'Todos os campos são obrigatórios' });
      return;
    }

    const userExists = await userService.findByEmail(email);
    if (userExists) {
      res.status(409).json({ message: 'E-mail já cadastrado' });
      return;
    }

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      password, // Nota: Em produção, nunca salve a senha pura. Use bcrypt!
    };

    await userService.create(newUser);

    // Remove a senha do retorno
    const response: UserResponse = this.toUserResponse(newUser);

    res.status(201).json(response);
  }

  // LOGIN
  async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    const user = await userService.findByEmail(email);

    // Validação simples (senha em texto puro para este exemplo)
    if (!user || user.password !== password) {
      res.status(401).json({ message: 'E-mail ou senha inválidos' });
      return;
    }

    // Gerar Token JWT
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h',
    });

    // Remove a senha do retorno
    const userResponse: UserResponse = this.toUserResponse(user);

    res.json({
      token,
      user: userResponse,
    });
  }

  private toUserResponse(user: User): UserResponse {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
