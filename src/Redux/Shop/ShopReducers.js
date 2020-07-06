import ShopData from './ShopData';

const INITIAL_STATE = {
  Collections: ShopData
};

const ShopReducers = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default ShopReducers;
