import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTheme, DefaultTheme} from 'styled-components';
// import {showNotification} from './localNotification/notification';
import PushNotification from 'react-native-push-notification';

const Main = () => {
  const theme: DefaultTheme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
      }}>
      <TouchableOpacity
        onPress={() => {
          PushNotification.localNotification({
            channelId: 'channel-id',
            title: 'title',
            message: 'message',
          });
        }}>
        <Text style={{color: theme.colors.white}}>11111</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // handleScheduleNotification('hoang anh 222', 'yeu nguoi minh yeu 2222')
          // changeThemeLight();
        }}>
        <Text style={{color: theme.colors.white}}>222222</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{color: theme.colors.white}}>333333</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
