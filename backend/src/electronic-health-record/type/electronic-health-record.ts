import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export class ElectronicHealthRecord extends Document {
  @ApiProperty()
  _id: string
  @ApiProperty()
  description: string;
  @ApiProperty()
  doctorId: string;
  @ApiProperty()
  conditionId: string;
  @ApiProperty()
  labelDurationSeconds: number;
}