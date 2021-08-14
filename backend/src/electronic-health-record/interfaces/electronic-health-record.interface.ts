import { Document } from 'mongoose';

export interface ElectronicHealthRecord extends Document {
  description: string;
  doctorId: string;
  conditionId: string;
  labelDurationSeconds: Number;
}