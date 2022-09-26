import {createSlice} from '@reduxjs/toolkit';
interface Action {
  type: string;
  payload: any;
}

interface ThemeModeType {
  theme: string;
}

const initState = {
  theme: 'dark',
} as ThemeModeType;

// const ThemeReduces = (state = initState, action: Action) => {
//   switch (action.type) {
//     case CHANGE_LIGHT_MODE:
//       return {
//         ...state,
//         theme: action.payload,
//       };
//     case CHANGE_DANK_MODE:
//       return {
//         ...state,
//         theme: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const dankMode = createAction(CHANGE_LIGHT_MODE);
// const lightMode = createAction(CHANGE_DANK_MODE);

// const ThemeReduces = createReducer(initState, builder => {
//   builder
//     .addCase(dankMode, (state, action: Action) => {
//       state.theme = action.payload;
//     })
//     .addCase(lightMode, (state, action: Action) => {
//       state.theme = action.payload;
//     });
// });

const themeSilce = createSlice({
  name: 'theme',
  initialState: initState,
  reducers: {
    changeDankMode(state, action: Action) {
      state.theme = action.payload;
    },
    changeLightMode(state, action: Action) {
      state.theme = action.payload;
    },
  },
});

const {actions, reducer} = themeSilce;
export const {changeDankMode, changeLightMode} = actions;
export type {ThemeModeType};
export default reducer;
