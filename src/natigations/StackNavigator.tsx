import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import {NoHeader} from './screenConfigs';
import Animated from 'react-native-reanimated';
import Home from 'src/screens/Home';
import Info from 'src/screens/Info';
import Main from 'src/Main';

const Stack = createNativeStackNavigator();

const defaultNavigationRoutes = {
  HOME: 'Home',
  INFO: 'Info',
  MAIN: 'Main',
} as const;

export type RootStackParamList = {
  [defaultNavigationRoutes.HOME]: undefined;
  [defaultNavigationRoutes.INFO]: undefined;
  [defaultNavigationRoutes.MAIN]: undefined;
};

export const navigationRoutes = {
  ...defaultNavigationRoutes,
} as const;

const StackNavigator = () => {
  return (
    <Animated.View style={styles.mainStack}>
      <Stack.Navigator
        screenOptions={{
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
          gestureEnabled: false,
          headerShown: false,
        }}
        initialRouteName={navigationRoutes.MAIN}>
        <Stack.Screen
          name={navigationRoutes.MAIN}
          component={Main}
          options={NoHeader}
        />
        <Stack.Screen
          name={navigationRoutes.HOME}
          component={Home}
          options={NoHeader}
        />
        <Stack.Screen
          name={navigationRoutes.INFO}
          component={Info}
          options={NoHeader}
        />
      </Stack.Navigator>
    </Animated.View>
  );
};

export default StackNavigator;
const styles = StyleSheet.create({
  mainStack: {
    flex: 1,
    marginTop: 10,
    overflow: 'hidden',
  },
});
