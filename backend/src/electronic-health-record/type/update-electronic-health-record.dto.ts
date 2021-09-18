import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from 'class-validator';

export class UpdateElectronicHealthRecordDto {
  @ApiProperty()
  @IsNotEmpty({message: 'Id of EHR is required'})
  id: string;
  
  @ApiProperty()
  @IsNotEmpty({message: 'Duration is required'})
  duration: number;
  
  @ApiProperty()
  @IsNotEmpty({message: 'Condition id is required'})
  conditionId: string;
}