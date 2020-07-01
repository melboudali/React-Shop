import React, { useEffect, Fragment } from 'react';
import { auth, createUserProfileDoc } from './Utils/Firebase';
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
import CheckoutPage from './Pages/Checkout/Checkout';
import NotFoundPage from './Pages/404/NotFound';
import { SelectCartItems } from './Redux/Cart/CartSelectors';
import './App.scss';

const App = ({ setCurrentUser, CartItems }) => {
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
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
    // TODO: if cart empty load data from localstorege
    // if (CartItems.length === 0) console.log('empty cart items');
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
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          {/* 404 Not Found Route */}
          <Route exact path='*' component={NotFoundPage} />
        </Switch>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = state => ({ CartItems: SelectCartItems(state) });
export default connect(mapStateToProps, { setCurrentUser })(App);

// Test
