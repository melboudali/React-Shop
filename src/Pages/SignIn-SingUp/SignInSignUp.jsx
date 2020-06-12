import React from 'react';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUP/SignUp';
import PropTypes from 'prop-types';
import './SignInSignUp.scss';

const SignInSignUp = props => {
  return (
    <div className="SignContainer">
      <SignIn />
      <SignUp />
    </div>
  );
};

SignInSignUp.propTypes = {};

export default SignInSignUp;
