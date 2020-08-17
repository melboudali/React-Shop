import { takeEvery, call, put } from 'redux-saga/effects';
import { firestore } from '../../Utils/Firebase';
import { FETCH_COLLECTIONS_START } from './ShopTypes';
import { fetchCollectionsSuccess, fetchCollectionsError } from './ShopActions';

// Generators function
function* NestedFunc() {
  try {
    const CollectionRef = firestore.collection('Collections').orderBy('title', 'asc');
    const data = yield CollectionRef.get();
    const CollectionsArray = yield call(
      () =>
        data.docs.map(doc => ({
          id: doc.id,
          title: doc.data().title,
          routeName: encodeURIComponent(doc.data().title.toLowerCase()),
          items: doc.data().items
        })),
      data
    );
    // Convert Collections Array to Object
    const CollectionsObject = CollectionsArray.reduce((Accumulator, Collection) => {
      Accumulator[Collection.title.toLowerCase()] = Collection;
      return Accumulator;
    }, {});
    yield put(fetchCollectionsSuccess(CollectionsObject));
  } catch (error) {
    // TODO: handle this later (show error)
    yield put(fetchCollectionsError(error.message));
    console.log(error.message);
  }
}

export function* ShopSagas() {
  yield takeEvery(FETCH_COLLECTIONS_START, NestedFunc);
}
