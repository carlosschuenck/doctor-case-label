import { DatabaseModule } from './../database/database.module';
import { conditionsProvider } from '../database/providers/condition.provider';
import { Module } from '@nestjs/common';
import { ConditionsService } from './conditions.service';
import { ConditionsController } from './conditions.controller';

@Module({
  providers: [
    ConditionsService, 
    ...conditionsProvider
  ],
  controllers: [ConditionsController],
  imports: [ DatabaseModule ]
})
export class ConditionsModule {}
