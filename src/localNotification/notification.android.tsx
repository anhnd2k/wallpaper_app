import PushNotification from 'react-native-push-notification';

const showNotification = (title: string, message: string) => {
  PushNotification.localNotification({
    channelId: '1',
    title: title,
    message: message,
  });
};

const handleScheduleNotification = (title: string, message: string) => {
  PushNotification.localNotificationSchedule({
    channelId: '1',
    title: title,
    message: message,
    date: new Date(Date.now() + 60 * 1000),
    visibility: 'public',
    priority: 'high',
  });
};

const handeCancel = () => {
  PushNotification.cancelAllLocalNotifications();
};

export {showNotification, handleScheduleNotification, handeCancel};
