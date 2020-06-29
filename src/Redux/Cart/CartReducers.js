import { ADD_ITEM_TO_CART, REDUCE_ITEM_QUANTITY, DELETE_ITEM_FROM_CART } from './CartTypes';
import { addItemToCart } from '../../Utils/Cart';

const INITIAL_STATE = {
  CartItems: []
};

const CartReducers = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_TO_CART:
      return { ...state, CartItems: addItemToCart(state.CartItems, payload) };

    case REDUCE_ITEM_QUANTITY:
      return {
        ...state,
        CartItems: state.CartItems.map(cartItem =>
          cartItem.id === payload ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
      };

    case DELETE_ITEM_FROM_CART:
      return {
        ...state,
        CartItems: state.CartItems.filter(cartItem => cartItem.id !== payload)
      };

    default:
      return state;
  }
};

export default CartReducers;
