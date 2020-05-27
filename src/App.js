import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './components/layouts/Navbar';
import Home from './components/Home';
import './App.scss';

const App = () => (
  <>
    <Navbar Container={Container} />
    <Home />
  </>
);

export default App;
