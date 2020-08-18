import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  auth,
  GGLProvider,
  FBProvider,
  GHProvider,
  createUserProfileDoc,
  GetCurrentUser
} from '../../Utils/Firebase';
import {
  SingUpSuccess,
  SingUpFail,
  SignInSuccess,
  SignInFail,
  SignOutSuccess,
  SignOutFail
} from './UserActions';
import {
  SIGN_UP_START,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  FACEBOOK_SIGN_IN_START,
  GITHUB_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START
} from './UserTypes';

// Sign up
function* SignUp() {
  yield takeLatest(SIGN_UP_START, function* ({
    payload: { name, email, password, confirmPassword }
  }) {
    if (password !== confirmPassword) {
      yield put(SingUpFail("Passwods don't match!"));
      return;
    }

    try {
      const { user } = yield auth.createUserWithEmailAndPassword(email, password);
      const userRef = yield call(createUserProfileDoc, { ...user, displayName: name });
      const snapShot = yield userRef.get();
      yield put(SingUpSuccess({ id: snapShot.id, ...snapShot.data() }));
    } catch (error) {
      yield put(SingUpFail(error.message));
    }
  });
}
// Sign in 
function* OnEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, function* ({ payload: { getEmail, getPassword } }) {
    try {
      const { user } = yield auth.signInWithEmailAndPassword(getEmail, getPassword);
      const userRef = yield call(createUserProfileDoc, user);
      const snapShot = yield userRef.get();
      yield put(SignInSuccess({ id: snapShot.id, ...snapShot.data() }));
    } catch (error) {
      yield put(SignInFail(error.message));
    }
  });
}

function* OnGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, SigninWithProvider, GGLProvider);
}

function* OnFacebookSignInStart() {
  yield takeLatest(FACEBOOK_SIGN_IN_START, SigninWithProvider, FBProvider);
}

function* OnGithubSignInStart() {
  yield takeLatest(GITHUB_SIGN_IN_START, SigninWithProvider, GHProvider);
}

function* SigninWithProvider(Provider) {
  try {
    const { user } = yield auth.signInWithPopup(Provider);
    const userRef = yield call(createUserProfileDoc, user);
    const snapShot = yield userRef.get();
    yield put(SignInSuccess({ id: snapShot.id, ...snapShot.data() }));
  } catch (error) {
    yield put(SignInFail(error.message));
  }
}

function* CheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, function* () {
    try {
      const userAuth = yield GetCurrentUser();
      if (userAuth) {
        const userRef = yield call(createUserProfileDoc, userAuth);
        const snapShot = yield userRef.get();
        yield put(SignInSuccess({ id: snapShot.id, ...snapShot.data() }));
      }
    } catch (error) {
      yield put(SignInFail(error.message));
    }
  });
}

// Sign out
function* SignOutStart() {
  yield takeLatest(SIGN_OUT_START, function* () {
    try {
      yield auth.signOut();
      yield put(SignOutSuccess());
    } catch (error) {
      yield put(SignOutFail(error.message));
    }
  });
}

export function* UserSagas() {
  yield all([
    call(SignUp),
    call(OnEmailSignInStart),
    call(OnGoogleSignInStart),
    call(OnFacebookSignInStart),
    call(OnGithubSignInStart),
    call(SignOutStart),
    call(CheckUserSession)
  ]);
}
