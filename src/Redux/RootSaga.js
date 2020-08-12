import { all, call } from 'redux-saga';
import { FetchingCollections } from './Shop/ShopSagas';

export default function* () {
  yield all([call(FetchingCollections)]);
}
