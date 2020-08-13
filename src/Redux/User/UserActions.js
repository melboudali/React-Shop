// import { auth, createUserProfileDoc } from '../../Utils/Firebase';
import {
  SET_CURRENT_USER,
  SET_AUTH_ERROR,
  CLEAR_AUTH_ERROR,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  FACEBOOK_SIGN_IN_START,
  FACEBOOK_SIGN_IN_SUCCESS,
  GITHUB_SIGN_IN_START,
  GITHUB_SIGN_IN_SUCCESS
} from './UserTypes';

export const setCurrentUser = user => dispatch => {
  dispatch({ type: SET_CURRENT_USER, payload: user });
};

export const setAuthError = error => dispatch => dispatch({ type: SET_AUTH_ERROR, payload: error });

export const clearAuthError = () => ({ type: CLEAR_AUTH_ERROR });

// Firebase / ReduxSaga
export const GoogleSignInStart = () => ({ type: GOOGLE_SIGN_IN_START });
export const GoogleSignInSuccess = user => ({ type: GOOGLE_SIGN_IN_SUCCESS, payload: user });
export const GoogleSignInFail = error => setAuthError(error);

export const FacebookSignInStart = () => ({ type: FACEBOOK_SIGN_IN_START });
export const FacebookSignInSuccess = user => ({ type: FACEBOOK_SIGN_IN_SUCCESS, payload: user });
export const FacebookSignInFail = error => setAuthError(error);

export const GithubSignInStart = () => ({ type: GITHUB_SIGN_IN_START });
export const GithubSignInSuccess = user => ({ type: GITHUB_SIGN_IN_SUCCESS, payload: user });
export const GithubSignInFail = error => setAuthError(error);
