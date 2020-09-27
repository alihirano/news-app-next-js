import { GET_NEWS_HEADLINE_REQUEST } from '../constants/news';

export const getNewsHeadlineAction = (apiKey, params) => {
  return {
    type: GET_NEWS_HEADLINE_REQUEST,
    apiKey: apiKey,
    params: params,
  };
};
