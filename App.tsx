import {Text, View, StatusBar} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {NativeModules} from 'react-native';
import StoreProvider from './src/store/StoreProvider';

const App: React.FC = () => {
  useLayoutEffect(() => {
    NativeModules.SplashScreen.hide();
  }, []);
  return (
    <StoreProvider>
      <StatusBar translucent backgroundColor="transparent" />
      <View
        style={{
          flex: 1,
          backgroundColor: '#ccc',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>dsdsdsdsd</Text>
      </View>
    </StoreProvider>
  );
};

export default App;
