import { getNewsHeadline } from '../services/news';
import { call, put } from 'redux-saga/effects';
import { GET_NEWS_HEADLINE_SUCCESS, GET_NEWS_HEADLINE_FAILURE } from '../constants/news';

export function* getNewsHeadlineSaga(action) {
  const { ok, data } = yield call(getNewsHeadline, action.apiKey, action.params);

  if (ok) {
    yield put({ type: GET_NEWS_HEADLINE_SUCCESS, data });
  } else {
    yield put({ type: GET_NEWS_HEADLINE_FAILURE, data });
  }
}
