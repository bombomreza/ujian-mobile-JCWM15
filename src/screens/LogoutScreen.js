import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../redux/actions';

const LogoutScreen = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Button title="Logout" onPress={() => dispatch(logoutAction())} />
    </View>
  );
};

export default LogoutScreen;
