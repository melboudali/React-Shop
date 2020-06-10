import React, { useEffect, useState } from 'react';
import { auth } from './Firebase/Firebase.utils';
import { Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navbar from './Layouts/Navbar';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Sign from './Pages/SignIn-SingUp/SignInSignUp';
import './App.scss';

const App = () => {
  const [getUser, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user));
    console.log(process.env.REACT_APP_APIKEY)
    console.log("mama");
  }, []);

  return (
    <>
      <Navbar Container={Container} CurrentUser={getUser} />
      <div className='NavBarSpace' />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/sign' component={Sign} />
          <Route exact path='/profile' component={() => <h1>Hello profile</h1>} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
