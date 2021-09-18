import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { ConditionsService } from './conditions.service';
import { Condition } from './type/condition';
import { ConditionDto } from './type/condition.dto';


@ApiBearerAuth()
@ApiTags('conditions')
@Controller('conditions')
export class ConditionsController {
  constructor(private conditionsService: ConditionsService){}

  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: 'Returns a list of conditions',
    isArray: true,
    type: Condition
  })
  @Get()
  async findAll(): Promise<ConditionDto[]> {
    return await this.conditionsService.findAll();
  }
}
