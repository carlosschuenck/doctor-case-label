import api from './api';

export async function login(email: string, password: string) {
  const { data } = await api.post<any>('/auth/login', {
    username: email,
    password
  });
  if(data && data['access_token'])
    localStorage.setItem('access_token', data['access_token'])
}