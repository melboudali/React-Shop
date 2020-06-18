import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import './CartIcon.scss';

const CartIcon = ({ cartItems }) => {
  return (
    <IconButton
      disableRipple
      disableFocusRipple
      className='Cart'
      aria-label='Cart Items'
      edge='end'>
      <Badge badgeContent={cartItems} className='cartBadge' max={9}>
        {/* <i className='fal fa-shopping-bag NavIcons'></i> */}
        <i class='fal fa-shopping-cart' NavIcons />
      </Badge>
    </IconButton>
  );
};

CartIcon.propTypes = {
  cartItems: PropTypes.number.isRequired
};

export default CartIcon;
