import React, { useState, Fragment } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { connect } from 'react-redux';
import CartDropdown from '../CartDropdown/CartDropdown';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import './CartIcon.scss';

const CartIcon = ({ getShowNav, getNavScrollDown, cartCount }) => {
  const [getShowDropdown, setShowDropdown] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setShowDropdown(false)}>
      <div className='CartIconContainer'>
        <IconButton
          disableRipple
          disableFocusRipple
          className='Cart'
          aria-label='Cart Items'
          edge='end'
          onClick={() => setShowDropdown(!getShowDropdown)}>
          <Badge badgeContent={cartCount} className='cartBadge' max={9}>
            <i className='fal fa-shopping-cart NavIcons' />
          </Badge>
        </IconButton>
        {(getShowNav || getNavScrollDown) && getShowDropdown && (
          <CartDropdown closeButton={() => setShowDropdown(false)} />
        )}
      </div>
    </ClickAwayListener>
  );
};

CartIcon.propTypes = {
  cartItems: PropTypes.number.isRequired
};

const mapStateToProps = ({ Cart: { CartItems } }) => ({
  cartCount: CartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
});

export default connect(mapStateToProps)(CartIcon);
