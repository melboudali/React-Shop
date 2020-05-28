import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navbar from './Layouts/Navbar';
import Home from './Pages/Home/Home';
import './App.scss';

const App = () => (
  <>
    <Navbar Container={Container} />
    <Route exact path='/' component={Home} />
  </>
);

export default App;
