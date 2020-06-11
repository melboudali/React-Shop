import React, { useState } from 'react';
import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithGithub
} from '../../Firebase/Firebase.utils';
import FormInput from '../FormInput/FormInput';
import Submit from '../SubmitButton/SubmitButton';
import PropTypes from 'prop-types';
import './SignIn.scss';

const SignIn = props => {
  const [getEmail, setEmail] = useState(null);
  const [getPassword, setPassword] = useState(null);

  const onEmailChange = e => setEmail(e.target.value);
  const onPasswordChange = e => setPassword(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };
  return (
    <div className='SignIn'>
      <h2 className='title'>I already have an account</h2>
      <span className='subtitle'>Sign in with your email and password</span>
      <form action='' method='post' onSubmit={onSubmit}>
        {/* <label htmlFor='email'>Email</label> */}
        <FormInput
          type='email'
          name='email'
          label='Email'
          id='email' //for label
          value={getEmail}
          handleChange={onEmailChange}
        />
        {/* PAssword */}
        {/* <label htmlFor='password'>Password</label> */}
        <FormInput
          type='password'
          name='password'
          label='Password'
          id='password'
          value={getPassword}
          handleChange={onPasswordChange}
        />
        <div className='buttons'>
          <Submit type='submit'>Sign In</Submit>
          <Submit onClick={signInWithGoogle}>
            <img src='https://pluspng.com/img-png/google-logo-png-open-2000.png' alt='google' />
            Sign in with google
          </Submit>
        </div>
        <div className='buttons'>
          <Submit onClick={signInWithFacebook}>
            <img
              src='https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png'
              alt='facebook'
            />
            Sign in with FB
          </Submit>
          <Submit onClick={signInWithGithub}>
            <img
              src='https://git.xmr.pm/trezor/trezor-common/raw/commit/4e2741505a448075178a4fb7a90aa4f9ace880a2/defs/webauthn/apps/github.png'
              alt='github'
            />
            Sign in with Github
          </Submit>
        </div>
      </form>
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;
