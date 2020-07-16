import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectAuthErrors } from '../../Redux/User/UserSelectors';
import Grid from '@material-ui/core/Grid';
import SignIn from '../../Components/SigninPageComponents/SignIn/SignIn';
import SignUp from '../../Components/SigninPageComponents/SignUP/SignUp';
import Snackbar from '../../Components/SigninPageComponents/Snackbar/Snackbar';
import PropTypes from 'prop-types';

const SignInSignUp = ({ authErrors }) => {
  return (
    <Fragment>
      <Grid container direction='row' justify='center' alignItems='flex-start'>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <SignIn />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <SignUp />
        </Grid>
      </Grid>
      {authErrors.length > 0 &&
        authErrors.map((error, id) => <Snackbar key={id} message={error} />)}
    </Fragment>
  );
};

SignInSignUp.propTypes = {
  authErrors: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  authErrors: SelectAuthErrors
});

export default connect(mapStateToProps)(SignInSignUp);
