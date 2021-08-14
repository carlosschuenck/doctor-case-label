import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConditionsModule } from './conditions/conditions.module';
import { DatabaseModule } from './database/database.module';
import { ElectronicHealthRecordModule } from './electronic-health-record/electronic-health-record.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConditionsModule, ElectronicHealthRecordModule, DatabaseModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
