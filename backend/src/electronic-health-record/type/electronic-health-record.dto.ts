import { ApiProperty, PickType } from '@nestjs/swagger';
import { ElectronicHealthRecord } from './electronic-health-record'

export class ElectronicHealthRecordDto extends PickType(ElectronicHealthRecord, ['description', 'doctorId', 'conditionId', '_id'] as const) {

  static convertToDto(ehr: ElectronicHealthRecord): ElectronicHealthRecordDto{
    return {
      _id: ehr._id,
      description: ehr.description,
      doctorId: ehr.doctorId,
      conditionId: ehr.conditionId,
    }
  }
}