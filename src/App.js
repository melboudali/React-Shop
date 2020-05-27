import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './Components/Layouts/Navbar';
import Home from './Components/Home';
import './App.scss';

const App = () => (
  <>
    <Navbar Container={Container} />
    <Home />
  </>
);

export default App;
