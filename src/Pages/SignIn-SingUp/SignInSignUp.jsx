import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUP/SignUp';
import PropTypes from 'prop-types';
import './SignInSignUp.scss';

const SignInSignUp = props => {
  return (
    <div className='SignContainer'>
      <Grid container direction='row' justify='center' alignItems='flex-start'>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}>
          <SignIn />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}>
          <SignUp />
        </Grid>
      </Grid>
    </div>
  );
};

SignInSignUp.propTypes = {};

export default SignInSignUp;
