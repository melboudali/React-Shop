import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCartItems, SelectCartTotal } from '../../Redux/Cart/CartSelectors';
import Stripe from '../../Components/CheckoutPageComponents/Stripe/Stripe';
import CheckoutItem from '../../Components/CheckoutPageComponents/CheckoutItem/CheckoutItem';
import './Checkout.scss';
import PropTypes from 'prop-types';

const Checkout = ({ CartItems, CartTotal }) => {
  useEffect(() => {
    console.log({
      'Cart Items: ': CartItems,
      'Cart Total: ': CartTotal
    });
  }, [CartItems, CartTotal]);
  return (
    <div className='CheckoutPage'>
      <h1 className='CheckoutTitle'>
        <svg className='SvgIcon' viewBox='0 0 24 24'>
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
        <Fragment>
          {CartItems.map((CartItem, id) => (
            <CheckoutItem key={id} iId={id} {...CartItem} />
          ))}
          <div className='Stripe'>
            <Stripe />
          </div>
          <div className='Total'>total: ${parseFloat(CartTotal).toFixed(2)}</div>
        </Fragment>
      ) : (
        <div className='NoItemsFound'>
          <svg className='SvgIcon' viewBox='0 0 24 24'>
            <path stroke='none' d='M0 0h24v24H0z' />
            <polyline points='7 10 12 4 17 10' />
            <path d='M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8Z' />
            <circle cx='12' cy='15' r='2' />
          </svg>
          no roducts in the cart.
        </div>
      )}
    </div>
  );
};

Checkout.propTypes = { CartItems: PropTypes.array, CartTotal: PropTypes.number };

const mapStateToProps = createStructuredSelector({
  CartItems: SelectCartItems,
  CartTotal: SelectCartTotal
});

export default connect(mapStateToProps)(Checkout);
