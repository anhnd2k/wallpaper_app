import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useTheme, DefaultTheme} from 'styled-components';
import {
  changeDankMode,
  changeLightMode,
} from './store/featureReducer/ThemeReducer';

import {showNotification} from './localNotification/notification';
import {fcmService} from './remoteNotification/FCMService';
import {localNotification} from './remoteNotification/LocalNotificationServices';
import PushNotification from 'react-native-push-notification';

// const WrapMain = styled.view`
//   justify-content: center;
//   flex: 1;
//   align-items: center;
//   background-color: ${props => props.theme.colors.background};
// `;

const Main = () => {
  const theme: DefaultTheme = useTheme();

  // useEffect(() => {
  //   fcmService.registerAppWithFCM();
  //   fcmService.register(onRegister, onNotification, onOpenNotification);
  //   localNotification.configure(onOpenNotification);

  //   function onRegister(notify: any) {
  //     console.log('==>> onRegister', notify);
  //     localNotification.showNotification(notify?.title, notify?.body);
  //   }

  //   function onNotification(notify: any) {
  //     console.log('==>> onNotification', notify);
  //     localNotification.showNotification(notify?.title, notify?.body);
  //   }

  //   function onOpenNotification(notify: any) {
  //     console.log('==>> onOpenNotification', notify);
  //   }

  //   return () => {
  //     console.log('==>> unRefister');
  //     localNotification.unregister();
  //   };
  // }, []);

  // const dispatch = useDispatch();
  // const changeThemeLight = () => {
  //   const action = changeLightMode('light');
  //   dispatch(action);
  // };

  // const actionTodo = () => {
  //   dispatch({type: ACTION_01, payload: 'ngo hoang anh'});
  // };

  // const changeThemeDark = () => {
  //   const action = changeDankMode('dark');
  //   dispatch(action);
  // };

  // async function requestUserPermission() {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // }

  // useEffect(() => {
  //   requestUserPermission();
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });
  //   return unsubscribe;
  // }, []);

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
            channelId: '1',
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
