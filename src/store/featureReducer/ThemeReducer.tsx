import {CHANGE_DANK_MODE, CHANGE_LIGHT_MODE} from '../constant';

interface Action {
  type: string;
  payload: any;
}

const initState = {
  theme: 'dark',
};

const ThemeReduces = (state = initState, action: Action) => {
  switch (action.type) {
    case CHANGE_LIGHT_MODE:
      return {
        ...state,
        theme: action.payload,
      };
    case CHANGE_DANK_MODE:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default ThemeReduces;
