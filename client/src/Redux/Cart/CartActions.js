import {
  ADD_ITEM_TO_CART,
  REDUCE_ITEM_QUANTITY,
  DELETE_ITEM_FROM_CART,
  CLEAR_CART
} from './CartTypes';

export const addItemToCart = item => ({ type: ADD_ITEM_TO_CART, payload: item });

export const deleteItem = (id, quantity) =>
  quantity > 1
    ? { type: REDUCE_ITEM_QUANTITY, payload: id }
    : { type: DELETE_ITEM_FROM_CART, payload: id };

export const ClearCart = () => ({ type: CLEAR_CART });
