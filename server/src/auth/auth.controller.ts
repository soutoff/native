import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { register } from 'module';
import { async } from 'rxjs';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register() {
    return this.authService.register();
  }

}