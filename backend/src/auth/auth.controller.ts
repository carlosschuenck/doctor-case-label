import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginCredentials } from './type/login-credentials';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: LoginCredentials) {
    console.log("credentials", credentials)
    return this.authService.login(credentials);
  }
}
