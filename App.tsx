import React, {useEffect, useLayoutEffect} from 'react';
import {NativeModules} from 'react-native';
import Main from './src/Main';
import StoreProvider from './src/store/StoreProvider';
import ThemeWrapper from './src/theme/ThemeWrapper';

const App: React.FC = () => {
  useLayoutEffect(() => {
    NativeModules.SplashScreen.hide();
  }, []);

  return (
    <StoreProvider>
      <ThemeWrapper>
        <Main />
      </ThemeWrapper>
    </StoreProvider>
  );
};

export default App;
