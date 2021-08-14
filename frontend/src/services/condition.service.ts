import { Condition } from '../interfaces/condition.interface';
import api, { authHeader } from './api';

export async function findAllConditions() {
  const { data } = await api.get<Condition[]>('/conditions',{ headers: authHeader() });
  return data;
}