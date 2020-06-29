import { createSelector } from 'reselect';

const SelectCart = state => state.Cart;

export const SelectCartItems = createSelector([SelectCart], Cart => Cart.CartItems);

export const SelectCartItemsCount = createSelector([SelectCartItems], CartItems =>
  CartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);
