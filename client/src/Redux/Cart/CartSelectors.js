import { createSelector } from 'reselect';

const SelectCart = state => state.Cart;

export const SelectCartItems = createSelector([SelectCart], Cart => Cart.CartItems);

export const SelectCartItemsCount = createSelector([SelectCartItems], CartItems =>
  CartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);

export const SelectCartTotal = createSelector([SelectCartItems], CartItems =>
  CartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.newPrice * cartItem.quantity,
    0
  )
);
