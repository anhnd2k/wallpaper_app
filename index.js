/**
 * @format
 */

import {Alert, AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('==+>>> setBackgroundMessageHandler');
});

function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    return null;
  }
  return <App />;
}

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => HeadlessCheck);
