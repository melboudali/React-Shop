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
