import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Store, Persistor } from './Redux/Store';
import App from './App';
import ScrollToTop from './Utils/ScrollToTop';

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <PersistGate persistor={Persistor}>
        <ScrollToTop />
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
