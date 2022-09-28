import React, {useLayoutEffect, useEffect} from 'react';
import {Alert, NativeModules} from 'react-native';
import StoreProvider from './src/store/StoreProvider';
import Main from './src/Main';
import ThemeWrapper from './src/theme/ThemeWrapper';
import {fcmService} from './src/remoteNotification/FCMService';
import {localNotification} from './src/remoteNotification/LocalNotificationServices';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App: React.FC = () => {
  useLayoutEffect(() => {
    NativeModules.SplashScreen.hide();
  }, []);

  const getFCMToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      try {
        const getfcmToken = await messaging().getToken();
        if (getfcmToken) {
          console.log('===>> fcmToken', getfcmToken);
          await AsyncStorage.setItem('fcmToken', getfcmToken);
        }
      } catch (error) {
        console.log('==> err', error);
      }
    }
  };

  const NotificaitonListner = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });

    messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
  };

  useEffect(() => {
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
        getFCMToken();
        NotificaitonListner();
      }
    }

    requestUserPermission();
    // fcmService.registerAppWithFCM();
    // fcmService.register(onRegister, onNotification, onOpenNotification);
    // localNotification.configure(onOpenNotification);
    // function onOpenNotification(notify: any) {
    //   localNotification.showNotification(0, notify, notify.title, notify);
    // }
    // function onRegister() {
    //   console.log('==');
    // }
    // function onNotification() {
    //   console.log('==');
    // }
    // return () => {
    // };
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
