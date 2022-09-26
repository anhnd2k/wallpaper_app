import {StatusBar} from 'react-native';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {useSelector} from 'react-redux';
import lightTheme from '../theme/Light';
import darkTheme from '../theme/Dark';
import {IRootState} from '../store/CombineReducers';

const ThemeWrapper = ({children}: {children: React.ReactNode}) => {
  const theme = useSelector((state: IRootState) => state.ThemeReduces.theme);
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <StatusBar
          barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
        />
        {children}
      </>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
