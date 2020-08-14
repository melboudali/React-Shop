import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  auth,
  GGLProvider,
  FBProvider,
  GHProvider,
  createUserProfileDoc
} from '../../Utils/Firebase';
import {
  GoogleSignInSuccess,
  GoogleSignInFail,
  FacebookSignInSuccess,
  FacebookSignInFail,
  GithubSignInSuccess,
  GithubSignInFail
} from './UserActions';
import { GOOGLE_SIGN_IN_START, FACEBOOK_SIGN_IN_START, GITHUB_SIGN_IN_START } from './UserTypes';

function* OnGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, function* () {
    try {
      const { user } = yield auth.signInWithPopup(GGLProvider);
      const userRef = yield call(createUserProfileDoc, user);
      const snapShot = yield userRef.get();
      yield put(GoogleSignInSuccess({ id: snapShot.id, ...snapShot.data() }));
    } catch (error) {
      yield put(GoogleSignInFail(error.message));
    }
  });
}

function* OnFacebookSignInStart() {
  yield takeLatest(FACEBOOK_SIGN_IN_START, function* () {
    try {
      const { user } = yield auth.signInWithPopup(FBProvider);
      const userRef = yield call(createUserProfileDoc, user);
      const snapShot = yield userRef.get();
      yield put(FacebookSignInSuccess({ id: snapShot.id, ...snapShot.data() }));
    } catch (error) {
      yield put(FacebookSignInFail(error.message));
    }
  });
}

function* OnGithubSignInStart() {
  yield takeLatest(GITHUB_SIGN_IN_START, function* () {
    try {
      const { user } = yield auth.signInWithPopup(GHProvider);
      const userRef = yield call(createUserProfileDoc, user);
      const snapShot = yield userRef.get();
      yield put(GithubSignInSuccess({ id: snapShot.id, ...snapShot.data() }));
    } catch (error) {
      yield put(GithubSignInFail(error.message));
    }
  });
}

export function* UserSagas() {
  yield all([call(OnGoogleSignInStart), call(OnFacebookSignInStart), call(OnGithubSignInStart)]);
}
