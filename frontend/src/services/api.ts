import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export function authHeader() {
  return {
    'Authorization': `Bearer ${localStorage.getItem('access_token')}` 
  }
}

export default api;
