import React, { useEffect, Fragment } from 'react';
import { auth, createUserProfileDoc } from './Firebase/Firebase.utils';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/UserActions';
import AuthPrivateRoute from './Routes/AuthPrivateRoute';
import Container from '@material-ui/core/Container';
import Announcement from './Layouts/Announcement/Announcement';
import Navbar from './Layouts/Navbar/Navbar';
import HomePage from './Pages/Home/Home';
import ShopPage from './Pages/Shop/Shop';
import SigninSignupPage from './Pages/SignIn-SingUp/SignInSignUp';
import NotFoundPage from './Pages/404/NotFound';
import './App.scss';

const App = ({ setCurrentUser }) => {
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        console.log(userAuth);
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }, [setCurrentUser]);

  return (
    <Fragment>
      <Announcement />
      <Navbar Container={Container} />
      <div className='NavbarDivider' />
      <Container>
        <Switch>
          {/* Private Routes */}
          <AuthPrivateRoute exact path='/signin' component={SigninSignupPage} />
          {/* Public Routes */}
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          {/* 404 Not Found Route */}
          <Route exact path='*' component={NotFoundPage} />
        </Switch>
      </Container>
    </Fragment>
  );
};

export default connect(null, { setCurrentUser })(App);

// Test