import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styled, {useTheme, DefaultTheme} from 'styled-components';
import {ACTION_01} from './store/constant';
import {
  changeDankMode,
  changeLightMode,
} from './store/featureReducer/ThemeReducer';

import {showNotification} from './localNotification/notification';

const WrapMain = styled.view`
  justify-content: center;
  flex: 1;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`;

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
    <WrapMain>
      <TouchableOpacity
        onPress={() => showNotification('hoang anh', 'yeu nguoi minh yeu')}>
        <Text style={{color: theme.colors.white}}>11111</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          // handleScheduleNotification('hoang anh 222', 'yeu nguoi minh yeu 2222')
          changeThemeLight()
        }>
        <Text style={{color: theme.colors.white}}>222222</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeThemeDark}>
        <Text style={{color: theme.colors.white}}>333333</Text>
      </TouchableOpacity>
    </WrapMain>
  );
};

export default Main;
