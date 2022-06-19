import getConfig from 'next/config';
import axios from 'axios';

const { publicRuntimeConfig } = getConfig();

export const axiosInstance = axios.create({
  baseURL: publicRuntimeConfig.apiEndPoint,
  withCredentials: true,
});
