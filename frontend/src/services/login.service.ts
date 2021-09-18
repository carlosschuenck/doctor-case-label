import jwt from 'jwt-decode';
import api from './api';

const token_key = 'access_token';



export async function login(email: string, password: string): Promise<boolean> {
  const response = await api.post<any>('/auth/login', {
    username: email,
    password
  });
  const { data, status } = response;
  if(status === 201)
    localStorage.setItem(token_key, data[token_key])
  return status === 201;
}

export async function logout() {
    localStorage.removeItem(token_key)
}

export function getUserName(){
  const token = localStorage.getItem(token_key)
  if(token) return jwt<any>(token)['name'];
  return '';
}