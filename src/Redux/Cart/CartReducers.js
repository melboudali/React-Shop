import { ADD_ITEM_TO_CART } from './CartTypes';
import { addItemToCart } from '../../Utils/CartUtils';

const INITIAL_STATE = {
  CartItems: []
};

const CartReducers = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_TO_CART:
      return { ...state, CartItems: addItemToCart(state.CartItems, payload) };
    default:
      return state;
  }
};

export default CartReducers;
