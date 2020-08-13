import { takeLatest, put, all, call } from 'redux-saga/effects';
import { auth, GGLProvider, createUserProfileDoc } from '../../Utils/Firebase';
import { GoogleSignInSuccess, GoogleSignInFail } from './UserActions';
import { GOOGLE_SIGN_IN_START, GOOGLE_SIGN_IN_SUCCESS } from './UserTypes';

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

export function* UserSagas() {
  yield all([call(OnGoogleSignInStart)]);
}
