import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  SelectCartItems,
  SelectCartItemsCount,
  SelectCartTotal
} from '../../Redux/Cart/CartSelectors';
import CheckoutItem from '../../Components/CheckoutPageComponents/CheckoutItem/CheckoutItem';
import Stripe from '../../Components/CheckoutPageComponents/Stripe/Stripe';
import { FaRegCreditCard } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './Checkout.scss';
import PropTypes from 'prop-types';

const Checkout = ({ CartItems, CartTotal }) => {
  return (
    <div className='CheckoutPage'>
      <h1 className='CheckoutTitle'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='icon icon-tabler icon-tabler-credit-card'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='#2c3e50'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'>
          <path stroke='none' d='M0 0h24v24H0z' />
          <rect x='3' y='5' width='18' height='14' rx='3' />
          <line x1='3' y1='10' x2='21' y2='10' />
          <line x1='7' y1='15' x2='7.01' y2='15' />
          <line x1='11' y1='15' x2='13' y2='15' />
        </svg>
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
      <div className='Stripe'>
        <Stripe />
      </div>

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
