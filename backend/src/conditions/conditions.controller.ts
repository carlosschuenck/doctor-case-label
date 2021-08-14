import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { ConditionsService } from './conditions.service';


@Controller('conditions')
export class ConditionsController {
  constructor(private conditionsService: ConditionsService){}
  
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req) {
    return await this.conditionsService.findAll();
  }

  @Post()
  add(){
    this.conditionsService.create();
  }


}
