import { takeLatest, all } from 'redux-saga/effects';
//saga

import { GET_NEWS_HEADLINE_REQUEST } from '../constants/news';
import { getNewsHeadlineSaga } from './news';
export default function* rootSaga() {
  // News
  yield all([takeLatest(GET_NEWS_HEADLINE_REQUEST, getNewsHeadlineSaga)]);
}
