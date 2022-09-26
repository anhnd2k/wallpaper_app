import {ACTION_01} from '../constant';
import {createReducer, createAction} from '@reduxjs/toolkit';

interface Action {
  type: string;
  payload: any;
}

interface TodoType {
  name: string;
}

const initState = {
  name: '',
} as TodoType;

const addTodo = createAction(ACTION_01);

const TodoReducer = createReducer(initState, builder => {
  builder.addCase(addTodo, (state, action: Action) => {
    console.log('===>>> to do text', action.payload);

    state.name = action.payload;
  });
});

// const TodoReducer = (state = initState, action: Action) => {
//   switch (action.type) {
//     case ACTION_01:
//       return state;
//     default:
//       return state;
//   }
// };

export default TodoReducer;
