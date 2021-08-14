import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { USER_MODEL } from './../database/providers/user.provider';
import { User } from './interfaces/user.interface';



@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_MODEL)
    private userModel: Model<User>,
  ) {}

  async findOne(username: string): Promise<any | undefined> {
    const { id, email, password } = await this.userModel.findOne({email: username}).exec();
    return { id, email, password };
  }
}
