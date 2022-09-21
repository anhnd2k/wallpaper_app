import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import CombineReducers from './combineReducers';

interface Props {
  children: React.ReactNode;
}

const Store = createStore(CombineReducers);

const StoreProvider = ({children}: Props) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default StoreProvider;
