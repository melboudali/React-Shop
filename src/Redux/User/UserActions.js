import { SET_CURRENT_USER, SET_AUTH_ERROR } from './UserTypes';

export const setCurrentUser = user => dispatch =>
  dispatch({ type: SET_CURRENT_USER, payload: user });

export const setAuthError = error => dispatch => dispatch({ type: SET_AUTH_ERROR, payload: error });