import { takeLatest, put, all, call } from 'redux-saga/effects';
import { SIGN_OUT_SUCCESS } from '../User/UserTypes';
import { ClearCart } from './CartActions';

function* ClearCartOnSignOut() {
  yield takeLatest(SIGN_OUT_SUCCESS, function* () {
    yield put(ClearCart());
  });
}

export function* CartSagas() {
  yield all([call(ClearCartOnSignOut)]);
}
