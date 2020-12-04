import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCartItems } from '../../../Redux/Cart/CartSelectors';
import { withRouter } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import Button from '../../SigninSignupPage/SubmitButton/SubmitButton';
import { CartDropdownContainer, CartContainer, ClassItems, NoItems } from './CartDropdown.Style';
import PropTypes from 'prop-types';

const CartDropdown = ({
  CartItems,
  closeCart,
  history,
  getShowNav,
  getNavScrollDown,
  getShowDropdown
}) => (
  <CartDropdownContainer
    getShowNav={getShowNav}
    getNavScrollDown={getNavScrollDown}
    getShowDropdown={getShowDropdown}>
    <CartContainer>
      {CartItems.length ? (
        <Fragment>
          <ClassItems>
            {CartItems.map(({ id, colors, size, ...Others }) => (
              <CartItem
                key={id}
                {...{
                  id,
                  color: colors.length > 0 ? colors[0] : null,
                  selectedSize: size.length > 0 ? size[0] : null,
                  ...Others
                }}
              />
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
