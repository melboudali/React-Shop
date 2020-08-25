import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCurrentUser } from '../../../Redux/User/UserSelectors';
import { SelectCartItems, SelectCartTotal } from '../../../Redux/Cart/CartSelectors';
import StripeCheckout from 'react-stripe-checkout';
import StripeLogo from '../../../Assets/Images/stripe-logo.jpg';
import PropTypes from 'prop-types';

const Stripe = ({ CurrentUser, CartItems, CartTotal }) => {
  const publishableKey = process.env.REACT_APP_STRIPE_KEY;
  const amount = CartTotal * 100;

  const onToken = async token => {
    try {
      const response = await axios({
        url: 'payment',
        method: 'post',
        data: { amount, token }
      });
      const Cart = await axios({ url: 'cart', method: 'post', data: CartItems });
      console.log('Payment Successful Data: ', response);
    } catch (error) {
      console.log('Payment error: ', error);
    }
  };

  return (
    <StripeCheckout
      name='REACT SHOP'
      description={`Your Total is: $${CartTotal}.00`}
      image={StripeLogo}
      ComponentClass='StripeCheckouts'
      stripeKey={publishableKey}
      label='PAY WITH CARD'
      panelLabel='PAY NOW'
      amount={amount}
      currency='USD'
      locale='en'
      email={CurrentUser && CurrentUser.email}
      shippingAddress
      billingAddress
      zipCode={false}
      allowRememberMe
      token={onToken}
      reconfigureOnUpdate={false}
    />
  );
};

Stripe.propTypes = {
  CurrentUser: PropTypes.object,
  CartTotal: PropTypes.number
};

const mapStateToProps = createStructuredSelector({
  CurrentUser: SelectCurrentUser,
  CartItems: SelectCartItems,
  CartTotal: SelectCartTotal
});

export default connect(mapStateToProps)(Stripe);
