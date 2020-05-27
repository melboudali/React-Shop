import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './Layouts/Navbar';
import Home from './Pages/Home/Home';
import './App.scss';

const App = () => (
  <>
    <Navbar Container={Container} />
    <Home />
  </>
);

export default App;
