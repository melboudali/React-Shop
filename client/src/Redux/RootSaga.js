import { all, call } from 'redux-saga/effects';
import { UserSagas } from './User/UserSagas';
import { ShopSagas } from './Shop/ShopSagas';
import { CartSagas } from './Cart/CartSagas';

export default function* () {
  yield all([call(UserSagas), call(ShopSagas), call(CartSagas)]);
}
