import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SelectCartItems } from '../../../Redux/Cart/CartSelectors';
import { createStructuredSelector } from 'reselect';
import Button from '../../SigninPageComponents/SubmitButton/SubmitButton';
import CartItem from '../CartItem/CartItem';
import PropTypes from 'prop-types';

import { CartDropdownContainer, CartContainer, ClassItems, NoItems } from './CartDropdown.Style';

const CartDropdown = ({
  CartItems,
  closeCart,
  history,
  getShowNav,
  getNavScrollDown,
  getShowDropdown
}) => {
  return (
    <CartDropdownContainer
      getShowNav={getShowNav}
      getNavScrollDown={getNavScrollDown}
      getShowDropdown={getShowDropdown}>
      <CartContainer>
        {CartItems.length ? (
          <Fragment>
            <ClassItems>
              {CartItems.map(Item => (
                <CartItem key={Item.id} Item={Item} />
              ))}
            </ClassItems>
            <Button
              onClick={() => {
                history.push('/checkout');
                closeCart();
              }}>
              Go to checkout
            </Button>
          </Fragment>
        ) : (
          <NoItems>no products in the cart.</NoItems>
        )}
      </CartContainer>
    </CartDropdownContainer>
  );
};

CartDropdown.propTypes = {
  CartItems: PropTypes.array,
  closeCart: PropTypes.func,
  history: PropTypes.object,
  getShowNav: PropTypes.bool,
  getNavScrollDown: PropTypes.bool,
  getShowDropdown: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  CartItems: SelectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
