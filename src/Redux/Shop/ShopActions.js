import { firestore } from '../../Utils/Firebase';
import { UPDATE_COLLECTIONS, SET_COLLECTIONS_ERROR } from './ShopTypes';

const setError = errorMessage => ({ type: SET_COLLECTIONS_ERROR, payload: errorMessage });

export const FetchingCollections = () => async dispatch => {
  const CollectionRef = firestore.collection('Collections').orderBy('title', 'asc');
  try {
    const data = await CollectionRef.get();
    const CollectionsArray = data.docs.map(doc => ({
      id: doc.id,
      title: doc.data().title,
      routeName: encodeURIComponent(doc.data().title.toLowerCase()),
      items: doc.data().items
    }));
    // Convert Collections Array to Object
    const CollectionsObject = CollectionsArray.reduce((Accumulator, Collection) => {
      Accumulator[Collection.title.toLowerCase()] = Collection;
      return Accumulator;
    }, {});
    dispatch({ type: UPDATE_COLLECTIONS, payload: CollectionsObject });
  } catch (error) {
    // TODO: handle this later (show error)
    dispatch(setError(error.message));
    console.log(error.message);
  }
};
