import { Bind, Body, Controller, Get, Post, Put, Req, Request, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { ElectronicHealthRecordService } from './electronic-health-record.service';
import { ElectronicHealthRecordDto } from './type/electronic-health-record.dto';
import { UpdateElectronicHealthRecordDto } from './type/update-electronic-health-record.dto';

@ApiTags('electronic-health-record')
@Controller('electronic-health-record')
export class ElectronicHealthRecordController {

  constructor(private service: ElectronicHealthRecordService){}
  
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: 'Returns a no labeled electronic health record',
    isArray: false,
    type: ElectronicHealthRecordDto
  })
  @ApiUnauthorizedResponse()
  @Get('no-labeled')
  async findNoLabeled(): Promise<ElectronicHealthRecordDto>{
    return await this.service.findNoLabeled();
  }
  
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({
    description: 'Create a random electronic health record',
  })
  @ApiUnauthorizedResponse()
  @Post('no-labeled')
  async createNoLabeled(): Promise<void> {
    await this.service.create();
  }
  
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: 'Update an electronic health record',
  })
  @ApiUnauthorizedResponse()
  @Put()
  async update(@Body() ehr: UpdateElectronicHealthRecordDto, @Req() { user: { id }}): Promise<void> {
    await this.service.update(ehr, id)
  }

}
