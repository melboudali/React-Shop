import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  SelectCartItems,
  SelectCartItemsCount,
  SelectCartTotal
} from '../../Redux/Cart/CartSelectors';
import CheckoutItem from '../../Components/CheckoutPageComponents/CheckoutItem/CheckoutItem';
import PropTypes from 'prop-types';
import './Checkout.scss';
import Stripe from '../../Components/CheckoutPageComponents/Stripe/Stripe';

const Checkout = ({ CartItems, CartCount, CartTotal }) => {
  return (
    <div className='CheckoutPage'>
      <h1 className='CheckoutTitle'>
        <i className='fad fa-credit-card-front icon' />
        Checkout Page
      </h1>
      <div className='CheckoutHeader'>
        <div className='HeaderBlock'>
          <span>product</span>
        </div>
        <div className='HeaderBlock'>
          <span>name</span>
        </div>
        <div className='HeaderBlock'>
          <span>quantity</span>
        </div>
        <div className='HeaderBlock'>
          <span>price</span>
        </div>
        <div className='HeaderBlock'>
          <span>remove</span>
        </div>
      </div>
      {CartItems.length ? (
        CartItems.map((CartItem, id) => <CheckoutItem key={id} iid={id} {...CartItem} />)
      ) : (
        <div className='noItemsFound'>
          <i className='fad fa-person-dolly-empty icon' />
          no roducts in the cart.
        </div>
      )}
      <Stripe />
      <div className='total'>Total: ${CartTotal}.00</div>
    </div>
  );
};

Checkout.propTypes = {};

const mapStateToProps = createStructuredSelector({
  CartItems: SelectCartItems,
  CartCount: SelectCartItemsCount,
  CartTotal: SelectCartTotal
});

export default connect(mapStateToProps)(Checkout);
