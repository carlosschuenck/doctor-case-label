import { ElectronicHealthRecord } from './interfaces/electronic-health-record.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ElectronicHealthRecordService {

  private readonly electronicHealthRecords: ElectronicHealthRecord[] = [
    {
      id: "dsadasd",
      conditionId: "dsadasdsa",
      description: "xxxx",
      doctorId: "dsadasdsa",
      labelTime: new Date()
    }
  ];

  findAllNoLabeled(): ElectronicHealthRecord[] {
    return this.electronicHealthRecords;
  }

}
