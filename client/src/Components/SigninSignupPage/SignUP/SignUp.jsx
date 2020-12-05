import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SingUpStart } from '../../../Redux/User/UserActions';
import FormInput from '../FormInput/FormInput';
import SubmitBtn from '../SubmitButton/SubmitButton';
import './SignUp.scss';
import PropTypes from 'prop-types';

const SignUp = ({ SingUpStart }) => {
  const [userCredentials, setUserCredentials] = useState(null);

  const onHandlechange = e => {
    e.preventDefault();
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    SingUpStart(userCredentials);
  };

  return (
    <div className='SignUp'>
      <h2 className='Title'>i do not have an account</h2>
      <span className='Subtitle'>sign up with your email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput
          type='text'
          id='signUp_name'
          name='name'
          label='Name'
          value={(userCredentials && userCredentials.name) || ''}
          autoComplete='new_name'
          required
          handleChange={onHandlechange}
        />
        <FormInput
          type='email'
          id='signUp_email'
          name='email'
          label='Email'
          value={(userCredentials && userCredentials.email) || ''}
          autoComplete='new_email'
          required
          handleChange={onHandlechange}
        />
        <FormInput
          type='password'
          id='signUp_password'
          name='password'
          label='Password'
          value={(userCredentials && userCredentials.password) || ''}
          autoComplete='new-password'
          required
          handleChange={onHandlechange}
        />
        <FormInput
          type='password'
          id='signUp_confirmPassword'
          name='confirmPassword'
          label='Confirm Password'
          value={(userCredentials && userCredentials.confirmPassword) || ''}
          autoComplete='new-password'
          required
          handleChange={onHandlechange}
        />
        <div className='Buttons'>
          <SubmitBtn type='submit'>
            <svg viewBox='0 0 24 24'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <circle cx='9' cy='7' r='4' />
              <path d='M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
              <path d='M16 11h6m-3 -3v6' />
            </svg>
            sign up
          </SubmitBtn>
        </div>
      </form>
    </div>
  );
};

SignUp.propTypes = { SingUpStart: PropTypes.func.isRequired };

export default connect(null, { SingUpStart })(SignUp);
