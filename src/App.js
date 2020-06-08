import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navbar from './Layouts/Navbar';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Sign from './Pages/SignIn-SingUp/SignInSignUp';
import './App.scss';

const App = () => (
  <>
    <Navbar Container={Container} />
    <div className='NavBarSpace' />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/shop' component={Shop} />
      <Route exact path='/sign' component={Sign} />
      <Route exact path='/profile' component={() => <h1>Hello profile</h1>} />
    </Switch>
  </>
);

export default App;
