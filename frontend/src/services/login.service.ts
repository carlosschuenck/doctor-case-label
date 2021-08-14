import api from './api';
import jwt from 'jwt-decode'

const token_key = 'access_token';
export async function login(email: string, password: string) {
  const { data } = await api.post<any>('/auth/login', {
    username: email,
    password
  });
  if(data && data[token_key])
    localStorage.setItem(token_key, data[token_key])
}

export async function logout() {
    localStorage.removeItem(token_key)
}

export function getUserName(){
  const token = localStorage.getItem(token_key)
  if(token) return jwt<any>(token)['name'];
  return '';
}