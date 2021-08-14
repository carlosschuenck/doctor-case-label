import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { ConditionsService } from './conditions.service';


@Controller('conditions')
export class ConditionsController {
  constructor(private conditionsService: ConditionsService){}
  
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req) {
    const { user: LoggedUser } = req;
    console.log("req", req.user)
    return await this.conditionsService.findAll();
  }

  @Post()
  add(){
    this.conditionsService.create();
  }


}
