import { Schema } from 'mongoose';

export const ConditionSchema = new Schema({
  code: String,
  description: String
});