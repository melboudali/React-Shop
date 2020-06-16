import React, { useEffect, useState } from 'react';
import { auth, createUserProfileDoc } from './Firebase/Firebase.utils';
import { Switch, Route } from 'react-router-dom';
import { Container, Snackbar, Button } from '@material-ui/core';
import Navbar from './Layouts/Navbar';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Sign from './Pages/SignIn-SingUp/SignInSignUp';
import './App.scss';
import { setCurrentUser } from './Redux/User/UserActions';
import { connect } from 'react-redux';

const App = ({ setCurrentUser }) => {
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
      <Navbar Container={Container} />
      <div className='NavbarDivider' />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/sign' component={Sign} />
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
        message={getUser && `Welcome ${getUser.CurrentUser.displayName}!`}
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
