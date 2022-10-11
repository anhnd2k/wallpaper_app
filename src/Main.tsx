import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useTheme, DefaultTheme} from 'styled-components';
import {ACTION_01} from './store/constant';
import {
  changeDankMode,
  changeLightMode,
} from './store/featureReducer/ThemeReducer';

import messaging from '@react-native-firebase/messaging';
import navigationService from './natigations/navigationService';
import {navigationRoutes} from './natigations/StackNavigator';
import {showNotification} from 'src/localNotification/notification';
import LoadingPortal from './components/base/LoadingPortal';

// const WrapMain = styled.view`
//   justify-content: center;
//   flex: 1;
//   align-items: center;
//   background-color: ${props => props.theme.colors.background};
// `;

const Main = () => {
  const theme: DefaultTheme = useTheme();

  const NotificaitonListner = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });

    // background when quit app
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
      console.log("===>>> 'A new FCM message arrived! leeeee", remoteMessage);
      // showNotification(
      //   remoteMessage?.notification?.title,
      //   remoteMessage?.notification?.body,
      // );
    });
  };

  useEffect(() => {
    NotificaitonListner();
  }, []);

  // background when on app

  const dispatch = useDispatch();
  const changeThemeLight = () => {
    const action = changeLightMode('light');
    dispatch(action);
    // dispatch({type: CHANGE_LIGHT_MODE, payload: 'light'});
  };

  const actionTodo = () => {
    dispatch({type: ACTION_01, payload: 'ngo hoang anh'});
  };

  const changeThemeDark = () => {
    const action = changeDankMode('dark');
    dispatch(action);
    // dispatch({type: CHANGE_LIGHT_MODE, payload: 'dark'});
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
      }}>
      <TouchableOpacity onPress={() => LoadingPortal.show()}>
        <Text style={{color: theme.colors.white}}>11111</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => showNotification('dd', 'dd')}>
        <Text style={{color: theme.colors.white}}>222222</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeThemeDark}>
        <Text style={{color: theme.colors.white}}>333333</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
