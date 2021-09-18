import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
import { USER_MODEL } from './../database/providers/user.provider';
import { User } from './interfaces/user.interface';



@Injectable()
export class UsersService implements OnModuleInit{
  constructor(
    @Inject(USER_MODEL)
    private userModel: Model<User>,
  ) {}

  async findOne(username: string): Promise<any | undefined> {
    const user = await this.userModel.findOne({email: username}).exec();
    if(user) {
     return { 
              id: user.id, 
              email: user.email, 
              password: user.password, 
              name: user.name 
            };
    }
    return null;
  }

  async onModuleInit() {
    const users = await this.userModel.find().exec();
    if(users.length){
      console.log('There are users registered...')
    }else{
      console.log('Setting up users...')
      await this.registerUsers();
    }
  }

  async registerUsers() {
    return this.userModel.insertMany([
      { id: '1', email: 'drjohn@gmail.com', password: 'drjohn', name: 'Dr John'},
      { id: '2', email: 'drbob@gmail.com', password: 'drbob', name: 'Dr Bob'}]);
  }
}
