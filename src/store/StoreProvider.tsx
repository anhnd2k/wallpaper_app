import React from 'react';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text} from 'react-native';

interface Props {
  children: React.ReactNode;
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['ThemeReduces'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

// const store = createStore(CombineReducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const persistor = persistStore(store);

const StoreProvider = ({children}: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
