import { Document } from 'mongoose';

export interface ElectronicHealthRecord extends Document {
  id: string;
  description: string;
  doctorId: string;
  conditionId: string;
  labelTime: Date;
}