import { Condition } from '../interfaces/condition.interface';
import api from './api';

export async function findAllConditions() {
  const { data } = await api.get<Condition[]>('/conditions');
  return data;
}