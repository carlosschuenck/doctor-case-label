import { Condition } from './interfaces/condition.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConditionsService {

  private readonly conditions: Condition[] = [{code: "F411", description:"Generalized anxiety disorder"}];

  findAll(): Condition[] {
    return this.conditions;
  }

}
