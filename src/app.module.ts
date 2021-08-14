import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConditionsModule } from './conditions/conditions.module';
import { ElectronicHealthRecordModule } from './electronic-health-record/electronic-health-record.module';

@Module({
  imports: [ConditionsModule, ElectronicHealthRecordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
