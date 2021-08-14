import { Schema } from 'mongoose';

export const ElectronicHealthRecordSchema = new Schema({
  id: String,
  description: String,
  doctorId: String,
  conditionId: String,
  labelTime: Date,
});