import React, {useLayoutEffect} from 'react';
import {NativeModules} from 'react-native';
import StoreProvider from './src/store/StoreProvider';
import Main from './src/Main';
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
