import React, { useState } from 'react';
import { auth, createUserProfileDoc } from '../../Firebase/Firebase.utils';
import FormInput from '../FormInput/FormInput';
import SubmitBtn from '../SubmitButton/SubmitButton';
import './SignUp.scss';
import PropTypes from 'prop-types';

const SignUp = props => {
  const [getUser, setUser] = useState(null);

  const onHandlechange = e => {
    e.preventDefault();
    setUser({ ...getUser, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = getUser;
    if (password !== confirmPassword) {
      alert("Passwods don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDoc(user, { displayName });
      setUser(null);
    } catch (error) {
      console.log('Error creating new user, ', error.message);
    }
  };

  return (
    <div className='SignUp'>
      <h2 className='title'>I do not have an account</h2>
      <span className='subtitle'>Sign up with your email and password</span>
      <form className='SignUpForm' onSubmit={onSubmit}>
        <FormInput
          type='text'
          id='displayName'
          name='displayName'
          label='Display Name'
          value={getUser ? getUser.displayName : ''}
          handleChange={onHandlechange}
        />
        <FormInput
          type='email'
          id='email'
          name='email'
          label='Email'
          value={getUser ? getUser.email : ''}
          handleChange={onHandlechange}
        />
        <FormInput
          type='password'
          id='password'
          name='password'
          label='Password'
          value={getUser ? getUser.password : ''}
          handleChange={onHandlechange}
        />
        <FormInput
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          label='Confirm Password'
          value={getUser ? getUser.confirmPassword : ''}
          handleChange={onHandlechange}
        />
        <div className='buttons'>
          <SubmitBtn type='submit'>Sign Up</SubmitBtn>
        </div>
      </form>
    </div>
  );
};

SignUp.propTypes = {};

export default SignUp;
