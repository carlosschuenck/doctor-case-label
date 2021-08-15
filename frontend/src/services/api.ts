import axios from 'axios';

const PORT = '3001'
const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

export function authHeader() {
  return {
    'Authorization': `Bearer ${localStorage.getItem('access_token')}` 
  }
}

export default api;
