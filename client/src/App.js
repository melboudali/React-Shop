import React, { useEffect, Fragment, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { CheckUserSession } from './Redux/User/UserActions';
import AuthPrivateRoute from './Routes/AuthPrivateRoute';
import Container from '@material-ui/core/Container';
import Navbar from './Layouts/Navbar/Navbar';
import Announcement from './Layouts/Announcement/Announcement';
import Footer from './Layouts/Footer/Footer';
import { NavbarDivider, GlobalStyle } from './App.style';
import Loading from './Components/ShopPageComponents/Loading/Loading';
// Error Boundary
import ErrorBoundary from './Pages/ErrorBoundary/ErrorBoundary';
// Code Splitting
const HomePage = lazy(() => import('./Pages/Home/Home'));
const ShopPage = lazy(() => import('./Pages/Shop/Shop'));
const SigninSignupPage = lazy(() => import('./Pages/SignIn-SingUp/SignInSignUp'));
const CheckoutPage = lazy(() => import('./Pages/Checkout/Checkout'));
const NotFoundPage = lazy(() => import('./Pages/404/NotFound'));

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
      <Container style={{ margin: '0 0 9px 0', minHeight: '60vh', position: 'relative' }}>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
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
          </Suspense>
        </ErrorBoundary>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default connect(null, { CheckUserSession })(App);
