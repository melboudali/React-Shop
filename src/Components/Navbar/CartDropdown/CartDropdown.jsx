import React from 'react';
import Button from '../../SigninPageComponents/SubmitButton/SubmitButton';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import PropTypes from 'prop-types';
import './CartDropdown.scss';

const CartDropdown = ({ closeButton, CartItems }) => {
  return (
    <div className='CartDropdown'>
      <div className='CartContainer'>
        <div className='classItems'>
          <span className='closeButton' onClick={closeButton}>
            <i className='fad fa-times-circle errorIcon' />
          </span>
          {CartItems.length > 0 ? (
            CartItems.map(Item => <CartItem key={Item.id} Item={Item} />)
          ) : (
            <span className='noItems'>no products in the cart.</span>
          )}
        </div>
        {CartItems.length > 0 && <Button>Go to checkout</Button>}
      </div>
    </div>
  );
};

CartDropdown.propTypes = {};

const mapStateToProps = state => ({
  CartItems: state.Cart.CartItems
});

export default connect(mapStateToProps, null)(CartDropdown);
