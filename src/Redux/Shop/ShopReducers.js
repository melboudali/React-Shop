import { FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from './ShopTypes';

const INITIAL_STATE = {
  Loading: true,
  Collections: null,
  Error: undefined
};

const ShopReducers = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_COLLECTIONS_SUCCESS:
      return { ...state, Collections: payload, Loading: false, Error: undefined };
    case FETCH_COLLECTIONS_FAILURE:
      return { ...state, Loading: false, Collections: {}, Error: payload };
    default:
      return state;
  }
};

export default ShopReducers;
