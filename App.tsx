import React, {useEffect, useLayoutEffect} from 'react';
import {NativeModules} from 'react-native';
import StoreProvider from './src/store/StoreProvider';
import Main from './src/Main';
import ThemeWrapper from './src/theme/ThemeWrapper';
import {fcmService} from './src/remoteNotification/FCMService';
import {localNotification} from './src/remoteNotification/LocalNotificationServices';
const App: React.FC = () => {
  useLayoutEffect(() => {
    NativeModules.SplashScreen.hide();
  }, []);

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

  return (
    <StoreProvider>
      <ThemeWrapper>
        <Main />
      </ThemeWrapper>
    </StoreProvider>
  );
};

export default App;
