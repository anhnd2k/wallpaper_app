import {combineReducers} from 'redux';
import {TodoReducer} from './featureReducer';

const CombineReducers = combineReducers({
  TodoReducer,
});

export default CombineReducers;
