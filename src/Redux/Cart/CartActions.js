import { ADD_ITEM_TO_CART, REDUCE_ITEM_QUANTITY, DELETE_ITEM_FROM_CART } from './CartTypes';

export const addItemToCart = item => dispatch =>
  dispatch({ type: ADD_ITEM_TO_CART, payload: item });

export const deleteItem = (id, quantity) => dispatch => {
  if (quantity > 1) {
    dispatch({ type: REDUCE_ITEM_QUANTITY, payload: id });
  } else {
    dispatch({ type: DELETE_ITEM_FROM_CART, payload: id });
  }
};
