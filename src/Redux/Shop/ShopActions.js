import { firestore } from '../../Utils/Firebase';
import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} from './ShopTypes';

export const fetchCollectionsStart = () => ({ type: FETCH_COLLECTIONS_START });
export const fetchCollectionsSuccess = Collections => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: Collections
});
export const fetchCollectionsError = errorMessage => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const FetchingCollections = () => dispatch => {
  // const CollectionRef = firestore.collection('Collections').orderBy('title', 'asc');
  // dispatch(fetchCollectionsStart());

  // CollectionRef.get()
  //   .then(data => {
  //     const CollectionsArray = data.docs.map(doc => ({
  //       id: doc.id,
  //       title: doc.data().title,
  //       routeName: encodeURIComponent(doc.data().title.toLowerCase()),
  //       items: doc.data().items
  //     }));
  //     const CollectionsObject = CollectionsArray.reduce((Accumulator, Collection) => {
  //       Accumulator[Collection.title.toLowerCase()] = Collection;
  //       return Accumulator;
  //     }, {});
  //     dispatch(fetchCollectionsSuccess(CollectionsObject));
  //   })
  //   .catch(error => {
  //     // TODO: handle this later (show error)
  //     dispatch(fetchCollectionsError(error.message));
  //     console.log(error.message);
  //   });
};
