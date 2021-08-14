import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { ElectronicHealthRecordController } from './electronic-health-record.controller';
import { ElectronicHealthRecordService } from './electronic-health-record.service';
import { electronicHealthRecordProvider } from 'src/database/providers/electronic-health-record.provider';

@Module({
  controllers: [ElectronicHealthRecordController],
  providers: [
    ElectronicHealthRecordService,
    ...electronicHealthRecordProvider
  ],
  imports: [ DatabaseModule ]
})
export class ElectronicHealthRecordModule {}
