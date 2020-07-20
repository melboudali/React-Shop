import { UPDATE_COLLECTIONS } from './ShopTypes';

const INITIAL_STATE = {
  Collections: {},
  loading: true
};

const ShopReducers = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UPDATE_COLLECTIONS:
      return { ...state, Collections: payload, loading: false };
    default:
      return state;
  }
};

export default ShopReducers;
