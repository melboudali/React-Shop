import { ADD_ITEM_TO_CART } from './CartTypes';

export const addItemToCart = item => dispatch =>
  dispatch({ type: ADD_ITEM_TO_CART, payload: item });
