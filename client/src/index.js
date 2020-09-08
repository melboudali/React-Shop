import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store, Persistor } from './Redux/Store';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import ScrollToTop from './Utils/ScrollToTop';
import App from './App';

ReactDOM.render(
  <Provider store={Store}>
    <PersistGate persistor={Persistor}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
