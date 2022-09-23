import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import CombineReducers from './CombineReducers';

interface Props {
  children: React.ReactNode;
}

const store = createStore(CombineReducers);

const StoreProvider = ({children}: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
