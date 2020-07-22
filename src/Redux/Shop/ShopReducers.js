import { SET_COLLECTIONS_LOADING, UPDATE_COLLECTIONS, SET_COLLECTIONS_ERROR } from './ShopTypes';

const INITIAL_STATE = {
  Loading: false,
  Collections: {},
  Error: undefined
};

const ShopReducers = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_COLLECTIONS_LOADING:
      return { ...state, Loading: payload };
    case UPDATE_COLLECTIONS:
      return { ...state, Collections: payload, Loading: false, Error: undefined };
    case SET_COLLECTIONS_ERROR:
      return { ...state, Loading: false, Collections: {}, Error: payload };
    default:
      return state;
  }
};

export default ShopReducers;
