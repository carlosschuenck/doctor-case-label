import { ApiProperty } from "@nestjs/swagger";

export class ConditionDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  label: string;
}