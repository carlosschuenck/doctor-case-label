import { ElectronicHealthRecordService } from './electronic-health-record.service';
import { ElectronicHealthRecord } from './interfaces/electronic-health-record.interface';
import { Controller, Get } from '@nestjs/common';

@Controller('electronic-health-record')
export class ElectronicHealthRecordController {

  constructor(private service: ElectronicHealthRecordService){}
  
  @Get('no-labeled')
  findAllNoLabeled(): ElectronicHealthRecord[] {
    return this.service.findAllNoLabeled();
  }

}
