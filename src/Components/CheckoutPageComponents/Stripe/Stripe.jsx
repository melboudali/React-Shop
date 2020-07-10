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
      // TODO: change this to string latter
      label={
        <div>
          <i className='fab fa-cc-visa icon' />
          PAY WITH CARD
        </div>
      } // text inside the Stripe button
      panelLabel='PAY NOW' // prepended to the amount in the bottom pay button
      amount={CartTotal * 100} // cents
      currency='USD'
      locale='en'
      email={CurrentUser && CurrentUser.email}
      // Note: Enabling either address option will give the user the ability to
      // fill out both. Addresses are sent as a second parameter in the token callback.
      shippingAddress
      billingAddress
      // Note: enabling both zipCode checks and billing or shipping address will
      // cause zipCheck to be pulled from billing address (set to shipping if none provided).
      zipCode={false}
      allowRememberMe // "Remember Me" option (default true)
      token={onToken} // submit callback
      // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
      // you are using multiple stripe keys
      reconfigureOnUpdate={false}
      // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
      // useful if you're using React-Tap-Event-Plugin
    ></StripeCheckout>
  );
};

Stripe.propTypes = {};

const mapStateToProps = createStructuredSelector({
  CurrentUser: SelectCurrentUser,
  CartTotal: SelectCartTotal
});

export default connect(mapStateToProps)(Stripe);
