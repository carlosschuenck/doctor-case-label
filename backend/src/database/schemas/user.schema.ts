import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  id: String,
  email: String,
  password: String,
  name: String
});