import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';
import { AxiosInteceptor } from './services/api';

function App() {
  return (
    <BrowserRouter>
      <AxiosInteceptor />
      <Routes />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
