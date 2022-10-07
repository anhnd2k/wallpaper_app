import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import navigationService from 'src/natigations/navigationService';
import {navigationRoutes} from 'src/natigations/StackNavigator';

const Home = () => {

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigationService.navigate(navigationRoutes.INFO)}>
        <Text>Home screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
