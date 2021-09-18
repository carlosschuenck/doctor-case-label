import axios, { AxiosRequestConfig } from 'axios';
import { History } from 'history';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
const PORT = '3001'
const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});



function authHeader() {
  
  return {
    'Authorization': `Bearer ${localStorage.getItem('access_token')}` 
  }
}

function validateStatusError (status: number){
  return status < 500
} 

api.interceptors.request.use((request: AxiosRequestConfig) => {
  request.headers = authHeader();
  request.validateStatus = validateStatusError
  return request;
});

export const setupInterceptors = (history: History<any> | string[]) => {
  api.interceptors.response.use(response => {
    const { data, status } = response;
    
    if(status === 401)
      history.push('/')
    else if(status === 400){
      const message = typeof data.message === 'string' ? data.message : data.message[0];
      toast.error(message)
    }
    
    return response;  
  },function(error){
    return Promise.reject(error);
  })
}

export function AxiosInteceptor () {
  const history = useHistory();
  
  useEffect(() => {
    setupInterceptors(history)
  }, [history])

  // not rendering anything
  return null
}

export default api;
