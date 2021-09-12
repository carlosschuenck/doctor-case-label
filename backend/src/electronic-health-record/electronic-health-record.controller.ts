import { Body, Controller, Get, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { ElectronicHealthRecordDto } from './dto/electronic-health-record.dto';
import { ElectronicHealthRecordService } from './electronic-health-record.service';

@ApiTags('electronic-health-record')
@Controller('electronic-health-record')
export class ElectronicHealthRecordController {

  constructor(private service: ElectronicHealthRecordService){}
  
  @UseGuards(JwtAuthGuard)
  @Get('no-labeled')
  async findNoLabeled(){
    return await this.service.findNoLabeled();
  }

  @Post('no-labeled')
  async createNoLabeled(){
    return await this.service.create();
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Body() ehr: ElectronicHealthRecordDto, @Req() req){
    await this.service.update(ehr, req.user['userId'])
  }

}
