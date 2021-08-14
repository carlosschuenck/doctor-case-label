import { Controller, Get, Post } from '@nestjs/common';
import { ElectronicHealthRecordService } from './electronic-health-record.service';

@Controller('electronic-health-record')
export class ElectronicHealthRecordController {

  constructor(private service: ElectronicHealthRecordService){}
  
  @Get('no-labeled')
  async findAllNoLabeled(){
    return await this.service.findAllNoLabeled();
  }

  @Post('no-labeled')
  async createNoLabeled(){
    return await this.service.create();
  }

}
