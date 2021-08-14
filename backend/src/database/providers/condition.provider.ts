import { DATABASE_PROVIDE } from './database.provider';
import { ConditionSchema } from '../schemas/condition.schema';
import { Connection } from 'mongoose';

export const CONDITION_MODEL = 'CONDITION_MODEL';
export const conditionsProvider = [
  {
    provide: CONDITION_MODEL,
    useFactory: (connection: Connection) => connection.model('Condition', ConditionSchema),
    inject: [ DATABASE_PROVIDE ],
  },
];