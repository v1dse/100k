import axios from '../hooks/useAxios';
import axios from 'axios';
import http from 'http';
import https from 'https';

export const updateProfile = (data) =>
  axios.put('/user/dashboard', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  const axiosInstance = axios.create({
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
});

export default axiosInstance;