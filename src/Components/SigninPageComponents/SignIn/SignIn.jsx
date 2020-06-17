import React, { useState } from 'react';
import {
  auth,
  signInWithGoogle,
  signInWithFacebook,
  signInWithGithub
} from '../../../Firebase/Firebase.utils';
import FormInput from '../FormInput/FormInput';
import Submit from '../SubmitButton/SubmitButton';
import PropTypes from 'prop-types';
import './SignIn.scss';

const SignIn = props => {
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
      console.log(error.message);
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
              src='https://pluspng.com/img-png/128x128-px-github-icon-256x256-png-256.png'
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
