import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {setNavigator} from './navigationService';
import StackNavigator from './StackNavigator';

const Navigation = () => {
  return (
    <NavigationContainer ref={setNavigator}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
