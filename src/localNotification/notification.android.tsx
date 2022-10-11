import PushNotification from 'react-native-push-notification';

const showNotification = (
  channelId: string,
  title: string,
  message: string,
) => {
  PushNotification.localNotification({
    channelId: channelId,
    title: title,
    message: message,
  });
};

const handleScheduleNotification = (
  channelId: string,
  title: string,
  message: string,
) => {
  PushNotification.localNotificationSchedule({
    channelId: channelId,
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
