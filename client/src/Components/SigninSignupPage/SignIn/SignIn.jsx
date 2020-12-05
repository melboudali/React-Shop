import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  EmailSignInStart,
  GoogleSignInStart,
  FacebookSignInStart,
  GithubSignInStart
} from '../../../Redux/User/UserActions';
import FormInput from '../FormInput/FormInput';
import Submit from '../SubmitButton/SubmitButton';
import PropTypes from 'prop-types';
import './SignIn.scss';

const SignIn = ({
  EmailSignInStart,
  GoogleSignInStart,
  FacebookSignInStart,
  GithubSignInStart
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = e => setEmail(e.target.value);
  const onPasswordChange = e => setPassword(e.target.value);

  const onSubmitHandler = e => {
    e.preventDefault();
    EmailSignInStart({ email, password });
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
          id='signin_email'
          value={email}
          autoComplete='new_email'
          required
          handleChange={onEmailChange}
        />
        <FormInput
          type='password'
          name='password'
          label='Password'
          id='signin_password'
          value={password}
          autoComplete='new-password'
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
            continue with email
          </Submit>
          <Submit type='button' onClick={GoogleSignInStart}>
            <svg viewBox='0 0 24 24'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <path d='M17.788 5.108A9 9 0 1021 12h-8' />
            </svg>
            continue with google
          </Submit>
        </div>
        <div className='Buttons'>
          <Submit type='button' onClick={FacebookSignInStart}>
            <svg viewBox='0 0 24 24'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3' />
            </svg>
            continue with fb
          </Submit>
          <Submit type='button' onClick={GithubSignInStart}>
            <svg viewBox='0 0 24 24'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <path d='M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21' />
            </svg>
            continue with github
          </Submit>
        </div>
      </form>
    </div>
  );
};

SignIn.propTypes = {
  EmailSignInStart: PropTypes.func.isRequired,
  GoogleSignInStart: PropTypes.func.isRequired,
  FacebookSignInStart: PropTypes.func.isRequired,
  GithubSignInStart: PropTypes.func.isRequired
};

export default connect(null, {
  EmailSignInStart,
  GoogleSignInStart,
  FacebookSignInStart,
  GithubSignInStart
})(SignIn);
