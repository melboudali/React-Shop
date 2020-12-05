import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCurrentUser } from '../../../Redux/User/UserSelectors';
import { SelectCartTotal } from '../../../Redux/Cart/CartSelectors';
import { ClearCart } from '../../../Redux/Cart/CartActions';
import StripeCheckout from 'react-stripe-checkout';
import StripeLogo from '../../../Assets/Images/stripe-logo.jpg';
import PropTypes from 'prop-types';

const publishableKey = process.env.REACT_APP_STRIPE_KEY;

const Stripe = ({ CurrentUser, CartTotal, ClearCart, history }) => {
  const amount = CartTotal * 100;
  const onToken = async token => {
    ClearCart();
    try {
      await axios({
        url: 'payment',
        method: 'post',
        data: { amount, token }
      }).then(res => {
        const transactionId = res.data.success.id ? res.data.success.id : 233491009388473;
        history.push(`/success?id=${transactionId}`);
      });
    } catch (error) {
      console.log('Payment error: ', error);
    }
  };

  return (
    <StripeCheckout
      name='REACT SHOP'
      description={`Your Total is: ${parseFloat(CartTotal).toFixed(2)}`}
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
  CartTotal: PropTypes.number,
  history: PropTypes.object.isRequired,
  ClearCart: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  CurrentUser: SelectCurrentUser,
  CartTotal: SelectCartTotal
});

export default withRouter(connect(mapStateToProps, { ClearCart })(Stripe));
