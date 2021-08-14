import { User } from './users/interfaces/user.interface';
import { USER_MODEL } from './database/providers/user.provider';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';



@Injectable()
export class AppService  implements OnModuleInit{
  
  constructor(
    @Inject(USER_MODEL)
    private userModel: Model<User>,
  ) {}

  async onModuleInit() {
    console.log(`Initialization...`);
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
      { id: '1', email: 'drjohn@gmail.com', password: 'drjohn' },
      { id: '2', email: 'drbob@gmail.com', password: 'drbob'}]);
  }
}
