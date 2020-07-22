import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  auth,
  signInWithGoogle,
  signInWithFacebook,
  signInWithGithub
} from '../../../Utils/Firebase';
import { setAuthError } from '../../../Redux/User/UserActions';
import FormInput from '../FormInput/FormInput';
import Submit from '../SubmitButton/SubmitButton';
import PropTypes from 'prop-types';
import './SignIn.scss';

const SignIn = ({ setAuthError }) => {
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');

  const onEmailChange = e => setEmail(e.target.value);
  const onPasswordChange = e => setPassword(e.target.value);

  const ClearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const onSubmitHandler = async e => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(getEmail, getPassword);
      ClearInputs();
    } catch (error) {
      ClearInputs();
      setAuthError(error.message);
    }
  };

  return (
    <div className='SignIn'>
      <h2 className='Title'>i already have an account</h2>
      <span className='Subtitle'>sign in with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          type='email'
          name='email'
          label='Email'
          id='email'
          value={getEmail}
          autoComplete='true'
          required
          handleChange={onEmailChange}
        />
        <FormInput
          type='password'
          name='password'
          label='Password'
          id='password'
          value={getPassword}
          autoComplete='true'
          required
          handleChange={onPasswordChange}
        />
        <div className='Buttons'>
          <Submit type='submit'>
            <svg viewBox='0 0 24 24'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <path d='M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2' />
              <path d='M20 12h-13l3 -3m0 6l-3 -3' />
            </svg>
            sign in with email
          </Submit>
          <Submit onClick={signInWithGoogle}>
            <svg viewBox='0 0 24 24'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <path d='M17.788 5.108A9 9 0 1021 12h-8' />
            </svg>
            sign in with google
          </Submit>
        </div>
        <div className='Buttons'>
          <Submit onClick={signInWithFacebook}>
            <svg viewBox='0 0 24 24'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3' />
            </svg>
            sign in with fb
          </Submit>
          <Submit onClick={signInWithGithub}>
            <svg viewBox='0 0 24 24'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <path d='M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21' />
            </svg>
            sign in with github
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
