import { UPDATE_COLLECTIONS, SET_COLLECTIONS_ERROR } from './ShopTypes';

const INITIAL_STATE = {
  Loading: true,
  Collections: null,
  Error: undefined
};

const ShopReducers = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UPDATE_COLLECTIONS:
      return { ...state, Collections: payload, Loading: false, Error: undefined };
    case SET_COLLECTIONS_ERROR:
      return { ...state, Loading: false, Collections: {}, Error: payload };
    default:
      return state;
  }
};

export default ShopReducers;
