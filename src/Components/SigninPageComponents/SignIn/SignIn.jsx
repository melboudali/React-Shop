import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAuthError } from '../../../Redux/User/UserActions';
import {
  auth,
  signInWithGoogle,
  signInWithFacebook,
  signInWithGithub
} from '../../../Utils/Firebase';
import FormInput from '../FormInput/FormInput';
import Submit from '../SubmitButton/SubmitButton';
import PropTypes from 'prop-types';
import './SignIn.scss';

const SignIn = ({ setAuthError }) => {
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');

  const onEmailChange = e => setEmail(e.target.value);
  const onPasswordChange = e => setPassword(e.target.value);

  const onSubmitHandler = async e => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(getEmail, getPassword);
      setEmail('');
      setPassword('');
    } catch (error) {
      setAuthError(error.message);
    }
  };

  return (
    <div className='SignIn'>
      <h2 className='title'>I already have an account</h2>
      <span className='subtitle'>Sign in with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          type='email'
          name='email'
          label='Email'
          id='email' //for label
          value={getEmail}
          handleChange={onEmailChange}
        />
        {/* PAssword */}
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
            {/* <img src='https://pluspng.com/img-png/google-logo-png-open-2000.png' alt='google' /> */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='icon icon-tabler icon-tabler-brand-google'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='white'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <path d='M17.788 5.108A9 9 0 1021 12h-8' />
            </svg>
            Sign in with google
          </Submit>
        </div>
        <div className='buttons'>
          <Submit onClick={signInWithFacebook}>
            {/* <img
              src='https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png'
              alt='facebook'
            /> */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='icon icon-tabler icon-tabler-brand-facebook'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='white'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3' />
            </svg>
            Sign in with FB
          </Submit>
          <Submit onClick={signInWithGithub}>
            {/* <img
              src='https://pluspng.com/img-png/128x128-px-github-icon-256x256-png-256.png'
              alt='github'
            /> */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='icon icon-tabler icon-tabler-brand-github'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='white'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <path d='M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21' />
            </svg>
            Sign in with Github
          </Submit>
        </div>
      </form>
    </div>
  );
};

SignIn.propTypes = {
  setAuthError: PropTypes.func.isRequired
};

export default connect(null, { setAuthError })(SignIn);
