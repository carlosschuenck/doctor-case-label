import { ElectronicHealthRecord, ElectronicHealthRecordDto } from './../interfaces/electronic-health-record.interface';
import api, { authHeader } from './api';

export async function findNoLabeled() {
  const { data } = await api.get<ElectronicHealthRecord>('/electronic-health-record/no-labeled', { headers: authHeader() });
  return data;
}


export async function updateEhr(ehrDto: ElectronicHealthRecordDto ) {
  const { data } = await api.put('/electronic-health-record', ehrDto, { headers: authHeader() });
  return data;
}