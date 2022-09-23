import {combineReducers} from 'redux';
import {TodoReducer, ThemeReduces} from './featureReducer';

const CombineReducers = combineReducers({
  TodoReducer,
  ThemeReduces,
});

export default CombineReducers;
