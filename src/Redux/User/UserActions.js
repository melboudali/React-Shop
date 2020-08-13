// import { auth, createUserProfileDoc } from '../../Utils/Firebase';
import {
  SET_CURRENT_USER,
  SET_AUTH_ERROR,
  CLEAR_AUTH_ERROR,
  EMAIL_SIGN_IN_START,
  EMAIL_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  FACEBOOK_SIGN_IN_START,
  FACEBOOK_SIGN_IN_SUCCESS,
  GITHUB_SIGN_IN_START,
  GITHUB_SIGN_IN_SUCCESS
} from './UserTypes';

export const setCurrentUser = user => ({ type: SET_CURRENT_USER, payload: user });

export const setAuthError = error => ({ type: SET_AUTH_ERROR, payload: error });

export const clearAuthError = () => ({ type: CLEAR_AUTH_ERROR });

// Firebase / ReduxSaga
export const EmailSignInStart = emailAndPassword => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});
export const EmailSignInSuccess = user => ({ type: EMAIL_SIGN_IN_SUCCESS, payload: user });
export const EmailSignInFail = error => setAuthError(error);

export const GoogleSignInStart = () => ({ type: GOOGLE_SIGN_IN_START });
export const GoogleSignInSuccess = user => ({ type: GOOGLE_SIGN_IN_SUCCESS, payload: user });
export const GoogleSignInFail = error => setAuthError(error);

export const FacebookSignInStart = () => ({ type: FACEBOOK_SIGN_IN_START });
export const FacebookSignInSuccess = user => ({ type: FACEBOOK_SIGN_IN_SUCCESS, payload: user });
export const FacebookSignInFail = error => setAuthError(error);

export const GithubSignInStart = () => ({ type: GITHUB_SIGN_IN_START });
export const GithubSignInSuccess = user => ({ type: GITHUB_SIGN_IN_SUCCESS, payload: user });
export const GithubSignInFail = error => setAuthError(error);
