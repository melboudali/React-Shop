// import { auth, createUserProfileDoc } from '../../Utils/Firebase';
import {
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  FACEBOOK_SIGN_IN_START,
  GITHUB_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  CLEAR_AUTH_ERROR
} from './UserTypes';

// Firebase / ReduxSaga
export const EmailSignInStart = emailAndPassword => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});
export const GoogleSignInStart = () => ({ type: GOOGLE_SIGN_IN_START });
export const FacebookSignInStart = () => ({ type: FACEBOOK_SIGN_IN_START });
export const GithubSignInStart = () => ({ type: GITHUB_SIGN_IN_START });

export const SignInSuccess = user => ({ type: SIGN_IN_SUCCESS, payload: user });
export const SignInFail = error => ({ type: SIGN_IN_ERROR, payload: error });

export const clearAuthError = () => ({ type: CLEAR_AUTH_ERROR });
