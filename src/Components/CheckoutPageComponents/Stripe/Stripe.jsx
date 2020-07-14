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
    // fetch('/save-stripe-token', {
    //   method: 'POST',
    //   body: JSON.stringify(token)
    // }).then(response => {
    //   response.json().then(data => {
    //     alert(`We are in business, ${data.email}`);
    //   });
    // });
    console.log(token);
  };

  return (
    <StripeCheckout
      name='REACT SHOP' // the pop-in header title
      description={`Your Total is: $${CartTotal}.00`}
      image={StripeLogo} // the pop-in header image (default none)
      ComponentClass='StripeCheckouts'
      stripeKey='pk_test_FrJ9GSBiXNyC8vKmMf3u20Rk'
      label='PAY WITH CARD'
      panelLabel='PAY NOW' // prepended to the amount in the bottom pay button
      amount={CartTotal * 100} // cents
      currency='USD'
      locale='en'
      email={CurrentUser && CurrentUser.email}
      shippingAddress
      billingAddress
      zipCode={false}
      allowRememberMe // "Remember Me" option (default true)
      token={onToken} // submit callback
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
