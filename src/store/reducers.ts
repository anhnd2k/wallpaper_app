import {combineReducers} from 'redux';
import {TodoReducer, ThemeReduces} from './featureReducer';
import {ThemeModeType} from './featureReducer/ThemeReducer';

const reducers = combineReducers({
  TodoReducer,
  ThemeReduces,
});

interface IRootState {
  TodoReducer: any;
  ThemeReduces: ThemeModeType;
}

export type {IRootState};
export default reducers;
