import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export class Condition extends Document {
  @ApiProperty()
  code: string;
  @ApiProperty()
  description: string;
}