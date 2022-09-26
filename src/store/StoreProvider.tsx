import React from 'react';
import {Provider} from 'react-redux';
import CombineReducers from './CombineReducers';
import {configureStore} from '@reduxjs/toolkit';
// import ThemeReduces from './featureReducer/ThemeReducer';

interface Props {
  children: React.ReactNode;
}

// const store = createStore(CombineReducers);
const store = configureStore(CombineReducers);

const StoreProvider = ({children}: Props) => {
  return (
    <Provider store={store}>{children}</Provider>
    // <Provider store={store}>
    //   {/* theme={theme === 'dark' ? darkTheme : lightTheme} */}
    //   <ThemeProvider theme={darkTheme}>
    //     <>
    //       {/* <StatusBar
    //         barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
    //       /> */}
    //       {children}
    //     </>
    //   </ThemeProvider>
    // </Provider>
  );
};

export default StoreProvider;
