import { combineReducers } from 'redux';
import { newsReducer } from './news';

const rootReducer = combineReducers({
  allNews: newsReducer,
});

export default rootReducer;
