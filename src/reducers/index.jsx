import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer.jsx';

export const rootReducer = combineReducers({
  counterReducer
});