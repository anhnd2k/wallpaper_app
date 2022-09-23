import React from 'react';
import {StatusBar} from 'react-native';
import {createStore} from 'redux';
import {Provider, useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import CombineReducers from './CombineReducers';


interface Props {
  children: React.ReactNode;
}

const store = createStore(CombineReducers);

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
