import PushNotification from 'react-native-push-notification';

const showNotification = (title: string, message: string) => {
  PushNotification.localNotification({
    title: title,
    message: message,
  });
};

const handleScheduleNotification = (title: string, message: string) => {
  const date = new Date();
  date.setSeconds(date.getSeconds() + 5);
  PushNotification.localNotificationSchedule({
    title: title,
    message: message,
    date: new Date(Date.now() + 5 * 1000),
    // fireDate: date.toISOString(),
  });
};

const handeCancel = () => {
  PushNotification.cancelAllLocalNotifications();
};

export {showNotification, handleScheduleNotification, handeCancel};
