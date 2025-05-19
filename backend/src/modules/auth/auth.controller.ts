import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto/signup.dto';
import { LoginDto } from './dto/login.dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    async signup(@Body() dto: SignupDto) {
      return this.authService.signup(dto);
    }
  
    @Post('login')
    async login(@Body() dto: LoginDto) {
      return this.authService.login(dto);
    }

    @Post('social-login')
    async socialLogin(@Body() dto: any) {
      return this.authService.socialLogin(dto.provider);
    }
    @Post('session')
    async getUserSession(@Body() tokens: any) {
      return this.authService.getUserSession(tokens);
    }
}
