import React, {useLayoutEffect, useEffect} from 'react';
import {NativeModules} from 'react-native';
import StoreProvider from './src/store/StoreProvider';
import ThemeWrapper from './src/theme/ThemeWrapper';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from 'src/natigations/Navigation';
import PushNotification from 'react-native-push-notification';
import {showNotification} from 'src/localNotification/notification';
import LoadingPortal from 'src/components/base/LoadingPortal';

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

  // const NotificaitonListner = () => {
  //   messaging().onNotificationOpenedApp(remoteMessage => {
  //     console.log(
  //       'Notification caused app to open from background state:',
  //       remoteMessage.notification,
  //     );
  //   });

  //   // background when quit app
  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage.notification,
  //         );
  //       }
  //     });

  //   messaging().onMessage(async remoteMessage => {
  //     console.log("===>>> 'A new FCM message arrived! leeeee", remoteMessage);
  //     showNotification(
  //       remoteMessage?.android?.title,
  //       remoteMessage?.android?.body,
  //     );
  //   });
  // };

  useEffect(() => {
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      if (enabled) {
        console.log('Authorization status:', authStatus);
        getFCMToken();
        PushNotification.createChannel(
          {
            channelId: '1', // (required)
            channelName: 'My channel', // (required)
            channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
            playSound: false, // (optional) default: true
            soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
            vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
          },
          created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
        );
        // NotificaitonListner();
      }
    }

    requestUserPermission();
  }, []);

  return (
    <>
      <StoreProvider>
        <ThemeWrapper>
          <Navigation />
        </ThemeWrapper>
      </StoreProvider>
      <LoadingPortal />
    </>
  );
};

export default App;
