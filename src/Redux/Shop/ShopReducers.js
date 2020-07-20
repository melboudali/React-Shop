import ShopData from './ShopData';
import { UPDATE_COLLECTIONS } from './ShopTypes';

const INITIAL_STATE = {
  Collections: ShopData
};

const ShopReducers = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UPDATE_COLLECTIONS:
      return { ...state, Collections: payload };
    default:
      return state;
  }
};

export default ShopReducers;
