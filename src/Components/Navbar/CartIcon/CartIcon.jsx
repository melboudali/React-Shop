import React, { useState, Fragment } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { connect } from 'react-redux';
import CartDropdown from '../CartDropdown/CartDropdown';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { SelectCartItemsCount } from '../../../Redux/Cart/CartSelectors';
import PropTypes from 'prop-types';
import './CartIcon.scss';

const CartIcon = ({ getShowNav, getNavScrollDown, cartCount }) => {
  const [getShowDropdown, setShowDropdown] = useState(false);

  const closeCart = () => setShowDropdown(false);

  return (
    <ClickAwayListener onClickAway={closeCart}>
      <div className='CartIconContainer'>
        <IconButton
          disableRipple
          disableFocusRipple
          className='Cart'
          aria-label='Cart Items'
          onClick={() => setShowDropdown(!getShowDropdown)}>
          <Badge badgeContent={cartCount} max={9}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='cartIcon'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <circle cx='9' cy='19' r='2' />
              <circle cx='17' cy='19' r='2' />
              <path d='M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2' />
            </svg>
          </Badge>
        </IconButton>
        {(getShowNav || getNavScrollDown) && getShowDropdown && (
          <CartDropdown closeCart={closeCart} />
        )}
      </div>
    </ClickAwayListener>
  );
};

CartIcon.propTypes = {};

const mapStateToProps = state => ({
  cartCount: SelectCartItemsCount(state)
});

export default connect(mapStateToProps)(CartIcon);
