import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import './SignIn.scss';

const SignIn = props => {
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');

  const onEmailChange = e => setEmail(e.target.value);
  const onPasswordChange = e => setPassword(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };
  return (
    <div className='SignIn'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form action='' method='post' onSubmit={onSubmit}>
        {/* <label htmlFor='email'>Email</label> */}
        <FormInput
          type='email'
          name='email'
          label='Email'
          id='email' //for label
          value={getEmail}
          handleChange={onEmailChange}
          required
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
          required
        />
        <Button type='submit'> Sign In </Button>
      </form>
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;
