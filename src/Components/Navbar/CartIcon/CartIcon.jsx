import React, { useState } from 'react';
import CartDropdown from '../CartDropdown/CartDropdown';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import './CartIcon.scss';

const CartIcon = ({ cartItems }) => {
  const [getShowDropdown, setShowDropdown] = useState(false);
  const onClick = () => {
    setShowDropdown(!getShowDropdown);
  };

  const closeButton = () => {
    setShowDropdown(false);
  };
  
  return (
    <>
      <IconButton
        disableRipple
        disableFocusRipple
        className='Cart'
        aria-label='Cart Items'
        edge='end'
        onClick={onClick}>
        <Badge badgeContent={cartItems} className='cartBadge' max={9}>
          {/* <i className='fal fa-shopping-bag NavIcons'></i> */}
          <i class='fal fa-shopping-cart NavIcons' />
        </Badge>
      </IconButton>
      {getShowDropdown && <CartDropdown closeButton={closeButton} />}
    </>
  );
};

CartIcon.propTypes = {
  cartItems: PropTypes.number.isRequired
};

export default CartIcon;
