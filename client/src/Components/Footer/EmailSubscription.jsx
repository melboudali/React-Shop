import React, { useState } from 'react';
import FormInput from '../SigninSignupPage/FormInput/FormInput';
import Submit from '../SigninSignupPage/SubmitButton/SubmitButton';
import { Container, Title } from './Footer.Style';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const onEmailChange = e => setEmail(e.target.value);
  const onSubmitHandler = e => {
    e.preventDefault();
    alert(
      `Your email: ${email}\nThank you for trying to subscribe , unfortunately this app is just a side project.`
    );
  };

  return (
    <Container>
      <Title>Newsletter Subscription</Title>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          type='email'
          name='email'
          label='Email'
          id='email'
          value={email}
          autoComplete='new_email'
          required
          handleChange={onEmailChange}
        />
        <Submit type='submit'>
          <svg viewBox='0 0 24 24'>
            <path stroke='none' d='M0 0h24v24H0z' />
            <path d='M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2' />
            <path d='M20 12h-13l3 -3m0 6l-3 -3' />
          </svg>
          subscribe now
        </Submit>
      </form>
    </Container>
  );
};

export default EmailSubscription;
