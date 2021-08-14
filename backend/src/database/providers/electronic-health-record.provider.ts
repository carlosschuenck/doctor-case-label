import { ElectronicHealthRecordSchema } from './../schemas/electronic-health-record.schema';
import { DATABASE_PROVIDE } from './database.provider';
import { Connection } from 'mongoose';

export const ELECTRONIC_HEALTH_RECORD_MODEL = 'ELECTRONIC_HEALTH_RECORD_MODEL';
export const electronicHealthRecordProvider = [
  {
    provide: ELECTRONIC_HEALTH_RECORD_MODEL,
    useFactory: (connection: Connection) => connection.model('ElectronicHealthRecord', ElectronicHealthRecordSchema),
    inject: [ DATABASE_PROVIDE ],
  },
];