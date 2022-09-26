// import {combineReducers} from 'redux';
import {TodoReducer, ThemeReduces} from './featureReducer';
import {ThemeModeType} from './featureReducer/ThemeReducer';

// const CombineReducers = combineReducers({
//   TodoReducer,
//   ThemeReduces,
// });

interface IRootState {
  TodoReducer: any;
  ThemeReduces: ThemeModeType;
}

const CombineReducers = {
  reducer: {
    TodoReducer,
    ThemeReduces,
  },
};

export type {IRootState};
export default CombineReducers;
