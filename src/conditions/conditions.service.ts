import { CONDITION_MODEL } from '../database/providers/condition.provider';
import { Condition } from './interfaces/condition.interface';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable()
export class ConditionsService {

  constructor(
    @Inject(CONDITION_MODEL)
    private conditionModel: Model<Condition>,
  ) {}

  async findAll(){
    return await this.conditionModel.find().exec();
  }

  async create(): Promise<Condition> {
    const createdCat = new this.conditionModel({
      code: 'XXX',
      description: 'DDEDEDE'
    });
    return createdCat.save();
  }


}
