import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useTheme, DefaultTheme} from 'styled-components';

import {ACTION_01} from './store/constant';
import {
  changeDankMode,
  changeLightMode,
} from './store/featureReducer/ThemeReducer';

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
      <TouchableOpacity onPress={actionTodo}>
        <Text style={{color: theme.colors.white}}>dispatch action todo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeThemeLight}>
        <Text style={{color: theme.colors.white}}>light theme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeThemeDark}>
        <Text style={{color: theme.colors.white}}>dark theme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
