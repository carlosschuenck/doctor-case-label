import { Model } from 'mongoose';
import { ELECTRONIC_HEALTH_RECORD_MODEL } from './../database/providers/electronic-health-record.provider';
import { ElectronicHealthRecord } from './interfaces/electronic-health-record.interface';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ElectronicHealthRecordService {

  constructor(
    @Inject(ELECTRONIC_HEALTH_RECORD_MODEL)
    private ehrModel: Model<ElectronicHealthRecord>,
  ) {}

  // private readonly electronicHealthRecords: ElectronicHealthRecord[] = [
  //   {
  //     id: "dsadasd",
  //     conditionId: "dsadasdsa",
  //     description: "xxxx",
  //     doctorId: "dsadasdsa",
  //     labelTime: new Date()
  //   }
  // ];

  

  async findAllNoLabeled(){
    return await this.ehrModel.find().exec();
  }

  
  async create() {
    const DEFAULT_DESCRIPTION = 'The patient is a 32 year old female who presents to the Urgent Care complaining of sore throat that started 7 days ago. Developed into post nasal drip and then cough. No measured fevers. Had chills and body aches at the onset that resolved after the first day. A little facial headache with the congestion at times; better today. Some pressure on and off in the ears, no pain, hearing loss or tinnitus. Cough is mostly dry, sometimes productive of clear sputum. Denies shortness of breath. Never smoker. Has never needed inhalers. No history of pneumonia. Currently treating with ibuprofen which helps. Tried some over-the-counter Mucinex ES and vitamin C.';
    const creatEhr = new this.ehrModel({
        description: DEFAULT_DESCRIPTION,
      })
    return await creatEhr.save();
  }

  // async create(): Promise<Condition> {
  //   const createdCat = new this.conditionModel({
  //     code: 'XXX',
  //     description: 'DDEDEDE'
  //   });
  //   return createdCat.save();
  // }


}
