import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { ELECTRONIC_HEALTH_RECORD_MODEL } from './../database/providers/electronic-health-record.provider';
import { ElectronicHealthRecord } from './type/electronic-health-record';
import { UpdateElectronicHealthRecordDto } from './type/update-electronic-health-record.dto';
import { ElectronicHealthRecordDto } from './type/electronic-health-record.dto';

@Injectable()
export class ElectronicHealthRecordService {

  constructor(
    @Inject(ELECTRONIC_HEALTH_RECORD_MODEL)
    private ehrModel: Model<ElectronicHealthRecord>,
  ) {}

  async findNoLabeled(): Promise<ElectronicHealthRecordDto> {
    const ehr: ElectronicHealthRecord = await this.ehrModel.findOne({doctorId: null}).exec();
    if(!ehr)
      throw new NotFoundException(null, "No EHR to be labeled");
    return ElectronicHealthRecordDto.convertToDto(ehr);
  }

  async create(): Promise<ElectronicHealthRecord> {
    const FAKE_DESCRIPTION = `The patient is a ${ Math.floor(Math.random() * 90 ) + 1 } year old 
    ${ (Math.floor(Math.random() * 2 ) + 1) > 1 ? 'female' : 'male' } who presents to the Urgent Care complaining of 
    sore throat that started 7 days ago. Developed into post nasal drip and then cough. No measured fevers. Had chills 
    and body aches at the onset that resolved after the first day. A little facial headache with the congestion at times; 
    better today. Some pressure on and off in the ears, no pain, hearing loss or tinnitus. Cough is mostly dry, sometimes 
    productive of clear sputum. Denies shortness of breath. Never smoker. Has never needed inhalers. No history of pneumonia. 
    Currently treating with ibuprofen which helps. Tried some over-the-counter Mucinex ES and vitamin C.`
    const creatEhr = new this.ehrModel({ description: FAKE_DESCRIPTION})
    return await creatEhr.save();
  }

  async update(ehr: UpdateElectronicHealthRecordDto, userId: string): Promise<ElectronicHealthRecord> {
    return this.ehrModel.findOneAndUpdate({_id: ehr.id}, {
      doctorId: userId,
      conditionId: ehr.conditionId,
      labelDurationSeconds: ehr.duration
    })
  }
}
