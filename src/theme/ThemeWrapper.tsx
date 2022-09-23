import {StatusBar} from 'react-native';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {useSelector} from 'react-redux';
import lightTheme from '../theme/Light';
import darkTheme from '../theme/Dark';

const ThemeWrapper = ({children}: {children: React.ReactNode}) => {
  const {theme} = useSelector(state => state.ThemeReduces);
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
