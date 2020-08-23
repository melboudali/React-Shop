import React, { useEffect, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { CheckUserSession } from './Redux/User/UserActions';
import AuthPrivateRoute from './Routes/AuthPrivateRoute';
import Container from '@material-ui/core/Container';
import Announcement from './Layouts/Announcement/Announcement';
import Navbar from './Layouts/Navbar/Navbar';
import HomePage from './Pages/Home/Home';
import ShopPage from './Pages/Shop/Shop';
import SigninSignupPage from './Pages/SignIn-SingUp/SignInSignUp';
import CheckoutPage from './Pages/Checkout/Checkout';
import NotFoundPage from './Pages/404/NotFound';
import Footer from './Layouts/Footer/Footer';
import { NavbarDivider, GlobalStyle } from './App.style';

const App = ({ CheckUserSession }) => {
  useEffect(() => {
    CheckUserSession();
  }, [CheckUserSession]);

  return (
    <Fragment>
      <GlobalStyle />
      <Announcement />
      <Navbar Container={Container} />
      <NavbarDivider />
      <Container>
        <Switch>
          {/* Private Routes */}
          <AuthPrivateRoute exact path='/signin' component={SigninSignupPage} />
          {/* Public Routes */}
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          {/* 404 Not Found Route */}
          <Route exact path='*' component={NotFoundPage} />
        </Switch>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default connect(null, { CheckUserSession })(App);
