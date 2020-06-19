import React, { useState, Fragment } from 'react';
import CartDropdown from '../CartDropdown/CartDropdown';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import './CartIcon.scss';

const CartIcon = ({ cartItems, getShowNav, getNavScrollDown }) => {
  const [getShowDropdown, setShowDropdown] = useState(false);
  const onClick = () => {
    setShowDropdown(!getShowDropdown);
  };

  const closeButton = () => {
    setShowDropdown(false);
  };

  return (
    <Fragment>
      <IconButton
        disableRipple
        disableFocusRipple
        className='Cart'
        aria-label='Cart Items'
        edge='end'
        onClick={onClick}>
        <Badge badgeContent={cartItems} className='cartBadge' max={9}>
          <i className='fal fa-shopping-cart NavIcons' />
        </Badge>
      </IconButton>
      {(getShowNav || getNavScrollDown) && getShowDropdown && (
        <CartDropdown closeButton={closeButton} />
      )}
    </Fragment>
  );
};

CartIcon.propTypes = {
  cartItems: PropTypes.number.isRequired
};

export default CartIcon;
