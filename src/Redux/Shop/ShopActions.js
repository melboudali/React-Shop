import { UPDATE_COLLECTIONS } from './ShopTypes';

export const updateCollections = Collections => dispatch =>
  dispatch({ type: UPDATE_COLLECTIONS, payload: Collections });
