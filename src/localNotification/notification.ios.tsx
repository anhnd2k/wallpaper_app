import PushNotificationIOS from '@react-native-community/push-notification-ios';

const showNotification = (title: string, message: string) => {
  // PushNotificationIOS.presentLocalNotification({
  //   alertTitle: title,
  //   alertBody: message,
  // });
  PushNotificationIOS.addNotificationRequest({
    id: 'channel-id',
    title: title,
    subtitle: message,
  });
};

const handleScheduleNotification = (title: string, message: string) => {
  const date = new Date();
  date.setSeconds(date.getSeconds() + 5);
  PushNotificationIOS.addNotificationRequest({
    id: 'channel-id',
    title: title,
    subtitle: message,
    fireDate: date,
  });
};

const handeCancel = () => {
  PushNotificationIOS.removeAllDeliveredNotifications();
};

export {showNotification, handleScheduleNotification, handeCancel};
