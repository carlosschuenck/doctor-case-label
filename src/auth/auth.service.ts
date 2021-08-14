import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoggedUser } from './../users/interfaces/logged-user.interface';
import { UsersService } from './../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login({email, id}) {
    const loggedUser: LoggedUser = { email, userId: id };
    return {
      // eslint-disable-next-line @typescript-eslint/camelcase
      access_token: this.jwtService.sign(loggedUser),
    };
  }
}