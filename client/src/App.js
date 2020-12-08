import React, { useEffect, Fragment, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { CheckUserSession } from './Redux/User/UserActions';
import { fetchCollectionsStart } from './Redux/Shop/ShopActions';
import AuthPrivateRoute from './Routes/AuthPrivateRoute';
import Navbar from './Layouts/Navbar/Navbar';
import Announcement from './Layouts/Announcement/Announcement';
// import Footer from './Layouts/Footer/Footer';
import { GlobalStyle, NavbarDivider, StyledContainer } from './App.style';
import Loading from './Components/ShopPage/Loading/Loading';
import PropTypes from 'prop-types';
import ErrorBoundary from './Pages/ErrorBoundary/ErrorBoundary';
const HomePage = lazy(() => import('./Pages/Home/Home'));
const ShopPage = lazy(() => import('./Pages/Shop/Shop'));
const SigninSignupPage = lazy(() => import('./Pages/SignIn-SingUp/SignInSignUp'));
const CheckoutPage = lazy(() => import('./Pages/Checkout/Checkout'));
const Success = lazy(() => import('./Pages/Success/Success'));
const NotFoundPage = lazy(() => import('./Pages/404/NotFound'));

const App = ({ CheckUserSession, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
    CheckUserSession();
  }, [CheckUserSession, fetchCollectionsStart]);

  return (
    <Fragment>
      <GlobalStyle />
      <Announcement />
      <Navbar />
      <NavbarDivider />
      <StyledContainer>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Switch>
              <AuthPrivateRoute exact path='/signin' component={SigninSignupPage} />
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/success' component={Success} />
              <Route exact path='*' component={NotFoundPage} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </StyledContainer>
      {/* <Footer /> */}
    </Fragment>
  );
};

App.prototype = {
  CheckUserSession: PropTypes.func.isRequired,
  fetchCollectionsStart: PropTypes.func.isRequired
};

export default connect(null, { CheckUserSession, fetchCollectionsStart })(App);
