import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useTheme} from 'styled-components';
import {CHANGE_DANK_MODE, CHANGE_LIGHT_MODE} from './store/constant';

const Main = () => {
  const theme = useTheme();

  const dispatch = useDispatch();
  const changeThemeLight = () => {
    dispatch({type: CHANGE_LIGHT_MODE, payload: 'light'});
  };

  const changeThemeDark = () => {
    dispatch({type: CHANGE_LIGHT_MODE, payload: 'dark'});
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
      }}>
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
