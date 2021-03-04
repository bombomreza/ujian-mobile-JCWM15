import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import LoginScreen from '../screens/LoginScreen';
import {TabNav} from './';
import {loginAction} from '../redux/actions';

const MainNav = () => {
  const [user, SetUser] = useState('');
  const dispatch = useDispatch();
  const {username} = useSelector((state) => state.user);
  useEffect(() => {
    AsyncStorage.getItem('username', (err, result) => {
      if (result) SetUser(result);
    });
    if (user) dispatch(loginAction(user));
  }, []);

  return (
    <>
      {username ? (
        <>
          <TabNav />
        </>
      ) : (
        <>
          <LoginScreen />
        </>
      )}
    </>
  );
};

export default MainNav;
