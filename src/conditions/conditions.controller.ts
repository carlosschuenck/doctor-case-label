import { ConditionsService } from './conditions.service';
import { Condition } from './interfaces/condition.interface';
import { Controller, Get } from '@nestjs/common';

@Controller('conditions')
export class ConditionsController {
  constructor(private conditionsService: ConditionsService){}
  
  @Get()
  findAll(): Condition[] {
    return this.conditionsService.findAll();
  }

}
