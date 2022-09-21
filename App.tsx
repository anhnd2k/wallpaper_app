import {Text, View} from 'react-native';
import React from 'react';
import StoreProvider from './src/store/StoreProvider';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <View>
        <Text>App</Text>
      </View>
    </StoreProvider>
  );
};

export default App;
