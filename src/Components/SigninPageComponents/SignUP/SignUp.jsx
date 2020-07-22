import React, { useState } from 'react';
import { connect } from 'react-redux';
import { auth, createUserProfileDoc } from '../../../Utils/Firebase';
import { setAuthError } from '../../../Redux/User/UserActions';
import FormInput from '../FormInput/FormInput';
import SubmitBtn from '../SubmitButton/SubmitButton';
import './SignUp.scss';
import PropTypes from 'prop-types';

const SignUp = ({ setAuthError }) => {
  const [getUser, setUser] = useState(null);

  const onHandlechange = e => {
    e.preventDefault();
    setUser({ ...getUser, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const { name, email, password, confirm_password } = getUser;
    if (password !== confirm_password) {
      setAuthError("Passwods don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDoc(user, { name });
    } catch (err) {
      setAuthError(err.message);
    }
  };

  return (
    <div className='SignUp'>
      <h2 className='Title'>i do not have an account</h2>
      <span className='Subtitle'>sign up with your email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput
          type='text'
          id='name'
          name='name'
          label='Name'
          value={(getUser && getUser.name) || ''}
          autoComplete='name'
          required
          handleChange={onHandlechange}
        />
        <FormInput
          type='email'
          id='new_email'
          name='email'
          label='Email'
          value={(getUser && getUser.email) || ''}
          autoComplete='email'
          required
          handleChange={onHandlechange}
        />
        <FormInput
          type='password'
          id='new_password'
          name='password'
          label='Password'
          value={(getUser && getUser.password) || ''}
          autoComplete='new-password'
          required
          handleChange={onHandlechange}
        />
        <FormInput
          type='password'
          id='confirm_password'
          name='confirm_password'
          label='Confirm Password'
          value={(getUser && getUser.confirm_password) || ''}
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
            sign up with email
          </SubmitBtn>
        </div>
      </form>
    </div>
  );
};

SignUp.propTypes = { setAuthError: PropTypes.func.isRequired };

export default connect(null, { setAuthError })(SignUp);
