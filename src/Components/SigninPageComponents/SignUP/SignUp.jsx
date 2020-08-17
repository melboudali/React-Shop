import React, { useState } from 'react';
import { connect } from 'react-redux';
import { auth, createUserProfileDoc } from '../../../Utils/Firebase';
import { SignInFail } from '../../../Redux/User/UserActions';
import FormInput from '../FormInput/FormInput';
import SubmitBtn from '../SubmitButton/SubmitButton';
import './SignUp.scss';
import PropTypes from 'prop-types';

const SignUp = ({ SignInFail }) => {
  const [getUser, setUser] = useState(null);

  const onHandlechange = e => {
    e.preventDefault();
    setUser({ ...getUser, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = getUser;
    if (password !== confirmPassword) {
      SignInFail("Passwods don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDoc({ ...user, displayName: name });
      console.log(typeof user);
    } catch (err) {
      SignInFail(err.message);
    }
  };

  return (
    <div className='SignUp'>
      <h2 className='Title'>i do not have an account</h2>
      <span className='Subtitle'>sign up with your email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput
          type='text'
          id='new_name'
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
          name='confirmPassword'
          label='Confirm Password'
          value={(getUser && getUser.confirmPassword) || ''}
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

SignUp.propTypes = { SignInFail: PropTypes.func.isRequired };

export default connect(null, { SignInFail })(SignUp);
