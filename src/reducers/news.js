import {
  GET_NEWS_HEADLINE_REQUEST,
  GET_NEWS_HEADLINE_SUCCESS,
  GET_NEWS_HEADLINE_FAILURE,
} from '../constants/news';

export const initialStateNews = {
  allNews: [],
  isLoadingGetNews: false,
  isSuccessGetNews: false,
  isErrorGetnews: null,
  params: {
    q: '',
    // from: '2020-08-26',
    // to: '2020-09-1',
    // sortBy: 'publishedAt',
    country: 'id',
    category: 'business',
    sources: '',
  },
};

export const newsReducer = (state = initialStateNews, action) => {
  switch (action.type) {
    case GET_NEWS_HEADLINE_REQUEST:
      return {
        ...state,
        isLoadingGetNews: true,
        isSuccessGetNews: false,
        isErrorGetnews: null,
        params: action.params,
      };
    case GET_NEWS_HEADLINE_SUCCESS:
      return {
        ...state,
        isLoadingGetNews: false,
        isSuccessGetNews: true,
        isErrorGetnews: null,
        allNews: action.data,
      };
    case GET_NEWS_HEADLINE_FAILURE:
      return {
        ...state,
        isLoadingGetNews: false,
        isSuccessGetNews: false,
        isErrorGetnews: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};
