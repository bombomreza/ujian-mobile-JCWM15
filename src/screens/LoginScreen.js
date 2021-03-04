import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Icon, Input} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {loginAction} from '../redux/actions';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginBtn = () => {
    if (username.length > 0) {
      dispatch(loginAction(username));
      setUsername('');
    } else {
      Alert.alert('Masukkan username!');
    }
  };
  return (
    <View>
      <View>
        <Icon name="covid" style="fa" size={200} color="pink" />
      </View>
      <View>
        <Input
          placeholder="Username"
          textAlign="center"
          onChangeText={(e) => setUsername(e)}
        />
        <Input
          placeholder="Password"
          textAlign="center"
          onChangeText={(e) => setPassword(e)}
        />
        <Button title="Login" onPress={loginBtn} />
      </View>
    </View>
  );
};

export default LoginScreen;
