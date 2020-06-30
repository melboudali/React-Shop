import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { SelectCurrentUser } from '../Redux/User/UserSelectors';

const AuthPrivateRoute = ({ component: Component, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={props => (currentUser ? <Redirect to='/' /> : <Component {...props} />)}
  />
);

const mapStateToProps = state => ({
  currentUser: SelectCurrentUser(state)
});

export default connect(mapStateToProps)(AuthPrivateRoute);
