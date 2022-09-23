import {ACTION_01} from '../constant';

interface Action {
  type: string;
  dispatch: any;
}

const initState = {
  name: '',
};

const TodoReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case ACTION_01:
      return state;
    default:
      return state;
  }
};

export default TodoReducer;
