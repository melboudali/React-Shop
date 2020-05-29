import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navbar from './Layouts/Navbar';
import Home from './Pages/Home/Home';
import './App.scss';
const homme = () => <h1>Profile</h1>;
const App = () => (
  <>
    <Navbar Container={Container} />
    <Route exact path='/' component={Home} />
    <Route exact path='/:id' component={Home} />
    <Route exact path='/profile' component={homme} />
  </>
);

export default App;
