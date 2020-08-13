import { all, call } from 'redux-saga/effects';
import { FetchingCollections } from './Shop/ShopSagas';
import { UserSagas } from './User/UserSagas';

export default function* () {
  yield all([call(FetchingCollections), call(UserSagas)]);
}
