import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { userProvider } from 'src/database/providers/user.provider';

@Module({
  providers: [
    UsersService,
    ...userProvider
  ],
  exports: [UsersService],
  imports: [ DatabaseModule ]
})
export class UsersModule {}
