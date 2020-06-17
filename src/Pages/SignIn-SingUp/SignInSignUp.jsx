import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Snackbar, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SignIn from '../../Components/SigninPageComponents/SignIn/SignIn';
import SignUp from '../../Components/SigninPageComponents/SignUP/SignUp';
import PropTypes from 'prop-types';
import './SignInSignUp.scss';

const SignInSignUp = ({ authErrors }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (authErrors.length > 0) setOpen(true);
  }, [authErrors]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <div className='SignContainer'>
      <Grid container direction='row' justify='center' alignItems='flex-start'>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <SignIn />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <SignUp />
        </Grid>
      </Grid>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={
          <div className='ErrorMessage'>
            <i className='fad fa-times-circle errorIcon' />
            {`${authErrors[0]}`}
          </div>
        }
        action={
          <div className='CloseBtn' onClick={handleClose}>
            <i className='fal fa-times' />
          </div>
        }
      />
    </div>
  );
};

SignInSignUp.propTypes = {};

const mapStateToProps = state => ({
  authErrors: state.User.authErrors
});

export default connect(mapStateToProps)(SignInSignUp);
