import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useTheme, DefaultTheme} from 'styled-components';
import {ACTION_01} from './store/constant';
import {
  changeDankMode,
  changeLightMode,
} from './store/featureReducer/ThemeReducer';

import {
  showNotification,
  handleScheduleNotification,
  handeCancel,
} from './localNotification/notification';

const Main = () => {
  const theme: DefaultTheme = useTheme();

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
        justifyContent: 'center',
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => showNotification('hoang anh', 'yeu nguoi minh yeu')}>
        <Text style={{color: theme.colors.white}}>11111</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          handleScheduleNotification('hoang anh 222', 'yeu nguoi minh yeu 2222')
        }>
        <Text style={{color: theme.colors.white}}>222222</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handeCancel}>
        <Text style={{color: theme.colors.white}}>333333</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
