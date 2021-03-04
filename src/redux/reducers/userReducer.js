import {LOGIN, LOGOUT, KEEPLOGIN} from '../types';

const INITIAL_STATE = {
  username: '',
  // password: '',
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case KEEPLOGIN:
      return {
        ...state,
      };
    case LOGIN:
      return {
        ...state,
        username: action.payload,
      };
    case LOGOUT: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
