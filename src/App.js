import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navbar from './Layouts/Navbar';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import './App.scss';

const App = () => (
  <>
    <Navbar Container={Container} />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Shop' component={Shop} />
      <Route exact path='/profile' component={() => <h1>Hello profile</h1>} />
    </Switch>
  </>
);

export default App;
