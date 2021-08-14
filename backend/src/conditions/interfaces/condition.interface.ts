import { Document } from 'mongoose';

export interface Condition extends Document {
  code: string;
  description: string;
}