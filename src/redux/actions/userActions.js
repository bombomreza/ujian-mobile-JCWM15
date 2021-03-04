import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {KEEPLOGIN, LOGIN, LOGOUT} from '../types';

export const loginAction = (username) => {
  return (dispatch) => {
    try {
      dispatch({
        type: LOGIN,
        payload: username,
      });
      AsyncStorage.setItem('username', username);
    } catch (err) {
      console.log(err);
    }
  };
};
export const logoutAction = () => {
  return (dispatch) => {
    try {
      AsyncStorage.clear();
      dispatch({
        type: LOGOUT,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const keepLoginAction = () => {
  return (dispatch) => {
    try {
      AsyncStorage.getItem('username');
      dispatch({type: KEEPLOGIN, payload: {username}});
    } catch (err) {
      console.log(err);
    }
  };
};
