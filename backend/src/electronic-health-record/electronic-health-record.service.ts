import { ElectronicHealthRecordDto } from './dto/electronic-health-record.dto';
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

  async findNoLabeled(){
    return await this.ehrModel.findOne({doctorId: null}).exec();
  }


  async create() {
    const CASE_3 = `The patient is a ${ Math.floor(Math.random() * 90 ) + 1 } year old ${ (Math.floor(Math.random() * 2 ) + 1) > 1 ? 'female' : 'male' } who presents to the Urgent Care complaining of sore throat that started 7 days ago. Developed into post nasal drip and then cough. No measured fevers. Had chills and body aches at the onset that resolved after the first day. A little facial headache with the congestion at times; better today. Some pressure on and off in the ears, no pain, hearing loss or tinnitus. Cough is mostly dry, sometimes productive of clear sputum. Denies shortness of breath. Never smoker. Has never needed inhalers. No history of pneumonia. Currently treating with ibuprofen which helps. Tried some over-the-counter Mucinex ES and vitamin C.`
    const creatEhr = new this.ehrModel({ description: CASE_3})
    return await creatEhr.save();
  }

  async update(ehr: ElectronicHealthRecordDto, userId: string){
    return this.ehrModel.findOneAndUpdate({_id: ehr.id}, {
      doctorId: userId,
      conditionId: ehr.conditionId,
      labelTime: new Date()
    })
  }
}
