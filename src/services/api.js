import { create } from 'apisauce';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

const api = create({
  baseURL: API_URL,
  timeout: 60000,
});

export default api;
