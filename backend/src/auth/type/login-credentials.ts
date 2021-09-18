import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginCredentials {
  @IsEmail({},{message: 'Invalid e-mail'})
  @IsNotEmpty({message: 'E-mail is required'})
  username: string;
  @IsNotEmpty({message: 'Password is required'})
  password: string;
}