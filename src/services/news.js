import api from './api';

export const getNewsHeadline = async (apiKey, params) => {
  return api.get(`/top-headlines?apiKey=${apiKey}`, params, {
    headers: { 'Content-Type': 'application/json' },
  });
};
