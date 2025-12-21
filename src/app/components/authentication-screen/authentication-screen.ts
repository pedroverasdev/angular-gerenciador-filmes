import { Component } from '@angular/core';
import { LoginForm } from '../login-form/login-form';
import { RegisterUserForm } from '../register-user-form/register-user-form';

@Component({
  selector: 'app-authentication-screen',
  imports: [RegisterUserForm, LoginForm],
  templateUrl: './authentication-screen.html',
  styleUrl: './authentication-screen.css',
})
export class AuthenticationScreen {}
