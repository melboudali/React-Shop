import React, { useState, Fragment } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { connect } from 'react-redux';
import CartDropdown from '../CartDropdown/CartDropdown';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { SelectCartItemsCount } from '../../../Redux/Cart/CartSelectors';
import { CartIconContainer, Cart, CartSvg } from './CartIcon.style';
import PropTypes from 'prop-types';

const CartIcon = ({ getShowNav, getNavScrollDown, cartCount }) => {
  const [getShowDropdown, setShowDropdown] = useState(false);

  const closeCart = () => setShowDropdown(false);

  return (
    <ClickAwayListener onClickAway={closeCart}>
      <CartIconContainer>
        <Cart
          disableRipple
          disableFocusRipple
          aria-label='Cart Items'
          onClick={() => setShowDropdown(!getShowDropdown)}>
          <Badge badgeContent={cartCount} max={9}>
            <CartSvg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <circle cx='9' cy='19' r='2' />
              <circle cx='17' cy='19' r='2' />
              <path d='M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2' />
            </CartSvg>
          </Badge>
        </Cart>
        {(getShowNav || getNavScrollDown) && getShowDropdown && (
          <CartDropdown closeCart={closeCart} />
        )}
      </CartIconContainer>
    </ClickAwayListener>
  );
};

CartIcon.propTypes = {};

const mapStateToProps = state => ({
  cartCount: SelectCartItemsCount(state)
});

export default connect(mapStateToProps)(CartIcon);
