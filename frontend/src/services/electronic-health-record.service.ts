import { ElectronicHealthRecord, ElectronicHealthRecordDto } from './../interfaces/electronic-health-record.interface';
import api from './api';

export async function findNoLabeled() {
  return await api.get<ElectronicHealthRecord>('/electronic-health-record/no-labeled');
}


export async function updateEhr(ehrDto: ElectronicHealthRecordDto ) {
  const { data } = await api.put('/electronic-health-record', ehrDto);
  return data;
}

export async function addEhr() {
  const { data } = await api.post('/electronic-health-record/no-labeled', {});
  return data;
}