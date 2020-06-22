export const addItemToCart = (CartItems, NewCartItemToAdd) => {
  const CartItemExisting = CartItems.find(CartItem => CartItem.id === NewCartItemToAdd.id);
  if (CartItemExisting) {
    return CartItems.map(CartItem =>
      CartItem.id === NewCartItemToAdd.id
        ? { ...CartItem, quantity: CartItem.quantity+1 }
        : CartItem
    );
  }
  return [...CartItems, { ...NewCartItemToAdd, quantity: 1 }];
};
