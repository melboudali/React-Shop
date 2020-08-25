import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCurrentUser } from '../../../Redux/User/UserSelectors';
import { SelectCartTotal } from '../../../Redux/Cart/CartSelectors';
import StripeCheckout from 'react-stripe-checkout';
import StripeLogo from '../../../Assets/Images/stripe-logo.jpg';
import PropTypes from 'prop-types';

const Stripe = ({ CurrentUser, CartTotal }) => {
  const onToken = token => {
    fetch('/payment', {
      method: 'POST',
      body: JSON.stringify(token)
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  return (
    <StripeCheckout
      name='REACT SHOP'
      description={`Your Total is: $${CartTotal}.00`}
      image={StripeLogo}
      ComponentClass='StripeCheckouts'
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      label='PAY WITH CARD'
      panelLabel='PAY NOW'
      amount={CartTotal * 100}
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
  CartTotal: SelectCartTotal
});

export default connect(mapStateToProps)(Stripe);
