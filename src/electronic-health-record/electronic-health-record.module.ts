import { Module } from '@nestjs/common';
import { ElectronicHealthRecordController } from './electronic-health-record.controller';
import { ElectronicHealthRecordService } from './electronic-health-record.service';

@Module({
  controllers: [ElectronicHealthRecordController],
  providers: [ElectronicHealthRecordService]
})
export class ElectronicHealthRecordModule {}
