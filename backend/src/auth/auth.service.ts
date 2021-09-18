import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoggedUser } from './../users/interfaces/logged-user.interface';
import { UsersService } from './../users/users.service';
import { LoginCredentials } from './type/login-credentials';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user) return user;
    throw new UnauthorizedException();
  }

  async login(credentials: LoginCredentials) {
    const {password, username} = credentials;
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {
      const loggedUser: LoggedUser = { email: user.email, name: user.name, id: user.id };
      return { 'access_token': this.jwtService.sign(loggedUser) };
    }
    throw new BadRequestException('Invalid credentials'); 
  }
}