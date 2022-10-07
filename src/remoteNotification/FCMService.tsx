import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';

class FCMService {
  register = (
    onRegister: any,
    onNotification: any,
    onOpenNotification: any,
  ) => {
    this.checkPermission(onRegister);
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('onNotificationOpenedApp Notification caused app to open');
      if (remoteMessage) {
        const notification = remoteMessage.notification;
        console.log('===>>> dmmmmmmmmmmmm');

        onOpenNotification(notification);
      }
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        console.log('getInitialNotification Notification caused app to open');
        if (remoteMessage) {
          const notification = remoteMessage.notification;
          console.log('===>>> dmmmmmmmmmmmm');

          onOpenNotification(notification);
        }
      });

    messaging().onMessage(async remoteMessage => {
      if (remoteMessage) {
        let notification = null;
        if (Platform.OS === 'ios') {
          notification = remoteMessage?.data?.notification;
        } else {
          notification = remoteMessage.notification;
        }
        onNotification(notification);
      }
    });
    // this.createNotificationListeners(
    //   onRegister,
    //   onNotification,
    //   onOpenNotification,
    // );
  };

  registerAppWithFCM = async () => {
    if (Platform.OS === 'ios') {
      await messaging().registerDeviceForRemoteMessages();
      await messaging().setAutoInitEnabled(true);
    }
  };

  checkPermission = (onRegister: any) => {
    messaging()
      .hasPermission()
      .then(enabled => {
        if (enabled) {
          this.getToken(onRegister);
        } else {
          this.requestPermission(onRegister);
        }
      })
      .catch(err => console.log(err));
  };

  getToken = (onRegister: any) => {
    messaging()
      .getToken()
      .then(fcmToken => {
        if (fcmToken) {
          onRegister(fcmToken);
        } else {
          console.log('cc fcm token');
        }
      })
      .catch(err => console.log('err fcm token', err));
  };

  requestPermission = (onRegister: any) => {
    messaging()
      .requestPermission()
      .then(() => {
        this.getToken(onRegister);
      })
      .catch(err => console.log(err));
  };

  deleteToken = () => {
    console.log(' delete token');
    messaging()
      .deleteToken()
      .catch(err => console.log('err delete token', err));
  };

  createNotificationListeners = (
    onregister: any,
    onNotification: any,
    onOpenNotification: any,
  ) => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('onNotificationOpenedApp Notification caused app to open');
      if (remoteMessage) {
        const notification = remoteMessage.notification;
        onOpenNotification(notification);
      }
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        console.log('getInitialNotification Notification caused app to open');
        if (remoteMessage) {
          const notification = remoteMessage.notification;
          onOpenNotification(notification);
        }
      });

    messaging().onMessage(async remoteMessage => {
      if (remoteMessage) {
        let notification = null;
        if (Platform.OS === 'ios') {
          notification = remoteMessage?.data?.notification;
        } else {
          notification = remoteMessage.notification;
        }
        console.log('==>> dm lam the');

        onNotification(notification);
      }
    });
    // messaging().onTokenRefresh(fcmToken => {
    //   onregister(fcmToken);
    // });
  };
  // unRegister = () => {
  //   this.messagelistener();
  // };
}

export const fcmService = new FCMService();
