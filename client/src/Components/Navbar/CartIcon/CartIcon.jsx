import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCartItemsCount } from '../../../Redux/Cart/CartSelectors';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Badge from '@material-ui/core/Badge';
import CartDropdown from '../CartDropdown/CartDropdown';
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
          aria-label='Cart'
          title='Cart'
          onClick={() => setShowDropdown(!getShowDropdown)}>
          <Badge badgeContent={cartCount} max={9}>
            <CartSvg viewBox='0 0 24 24'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <circle cx='9' cy='19' r='2' />
              <circle cx='17' cy='19' r='2' />
              <path d='M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2' />
            </CartSvg>
          </Badge>
        </Cart>
        <CartDropdown
          getShowNav={getShowNav}
          getNavScrollDown={getNavScrollDown}
          getShowDropdown={getShowDropdown}
          closeCart={closeCart}
        />
      </CartIconContainer>
    </ClickAwayListener>
  );
};

CartIcon.propTypes = {
  getShowNav: PropTypes.bool,
  getNavScrollDown: PropTypes.bool,
  cartCount: PropTypes.number
};

const mapStateToProps = createStructuredSelector({
  cartCount: SelectCartItemsCount
});

export default connect(mapStateToProps)(CartIcon);
