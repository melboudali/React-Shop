import React, { useEffect, useState } from 'react';
import { auth, createUserProfileDoc } from './Firebase/Firebase.utils';
import { Switch, Route } from 'react-router-dom';
import { Container, Snackbar } from '@material-ui/core';
import Navbar from './Layouts/Navbar';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Sign from './Pages/SignIn-SingUp/SignInSignUp';
import './App.scss';

const App = () => {
  const [getUser, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({
            CurrentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <Navbar Container={Container} {...getUser} />
      <div className='NavBarSpace' />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/sign' component={Sign} />
          <Route exact path='/profile' component={() => <h1>Hello </h1>} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
