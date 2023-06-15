// userActions.js
import { SET_USER } from './userActionTypes';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});
