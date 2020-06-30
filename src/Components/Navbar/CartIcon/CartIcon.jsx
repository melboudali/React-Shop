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
          edge='end'
          onClick={() => setShowDropdown(!getShowDropdown)}>
          <Badge badgeContent={cartCount} className='cartBadge' max={9}>
            <i className='fal fa-shopping-cart NavIcons' />
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
