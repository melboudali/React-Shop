import React, { useEffect, useState } from 'react';
import { auth, createUserProfileDoc } from './Firebase/Firebase.utils';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container, Snackbar, Button } from '@material-ui/core';
import Announcement from './Layouts/Announcement/Announcement';
import Navbar from './Layouts/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Sign from './Pages/SignIn-SingUp/SignInSignUp';
import './App.scss';
import { setCurrentUser } from './Redux/User/UserActions';
import { connect } from 'react-redux';
import AuthPrivateRoute from './Routes/AuthPrivateRoute';

const App = ({ setCurrentUser, currentUser }) => {
  const [getUser, setUser] = useState(null);

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          setOpen(true);
        });
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  return (
    <>
      <Announcement />
      <Navbar Container={Container} />
      <div className='NavbarDivider' />
      <Container>
        <Switch>
          {/* Private Routes */}
          <AuthPrivateRoute exact path='/sign' component={Sign} />
          {/* Public Routes */}
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/profile' component={() => <h1>Hello </h1>} />
        </Switch>
      </Container>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        autoHideDuration={10000}
        onClose={handleClose}
        message={currentUser && `Welcome ${currentUser.displayName}!`}
        action={
          <>
            <Button color='secondary' size='small' onClick={handleClose}>
              CLOSE
            </Button>
            <i className='fal fa-times' onClick={handleClose} />
          </>
        }
      />
    </>
  );
};

const mapStateToProps = state => ({
  currentUser: state.User.currentUser
});

export default connect(mapStateToProps, { setCurrentUser })(App);
