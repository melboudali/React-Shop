import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AuthPrivateRoute = ({ component: Component, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={props => (currentUser ? <Redirect to='/' /> : <Component {...props} />)}
  />
);

const mapStateToProps = state => ({
  currentUser: state.User.currentUser
});

export default connect(mapStateToProps)(AuthPrivateRoute);
