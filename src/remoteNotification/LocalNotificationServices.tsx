import {Platform, AppState} from 'react-native';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import {showNotification} from '../localNotification/notification';

class LocalNotificationServices {
  configure = (onOpenNotification: any) => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log('TOKEN:', token);
        PushNotification.popInitialNotification(notification => {
          if (notification) {
            console.log('notification:', notification);
          }
        });
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log('===>>>>>>>>> opent notify');

        if (!notification?.data) {
          return;
        }
        notification.userInteraction = true;

        onOpenNotification(
          Platform.OS === 'ios' ? notification.data.item : notification.data,
        );
        if (Platform.OS === 'ios') {
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        }
      },

      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION: onAction', notification);
      },

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function (err) {
        console.error(err.message, err);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: Platform.OS === 'ios',
    });
  };

  unregister = () => {
    PushNotification.unregister();
  };

  showNotification = (title: string, message: string) => {
    PushNotification.localNotification({
      channelId: 'channel-id',
      title: title || '',
      message: message || '',
    });
    // showNotification(title, message);
  };

  cancelAllLocalNotifications = () => {
    if (Platform.OS === 'ios') {
      PushNotificationIOS.removeAllDeliveredNotifications();
    } else {
      PushNotification.cancelAllLocalNotifications();
    }
  };

  removeDeliveredNotificationById = (notificationId: string) => {
    PushNotification.cancelLocalNotification(notificationId);
  };
}

export const localNotification = new LocalNotificationServices();
