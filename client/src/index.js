import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store, Persistor } from './Redux/Store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import ScrollToTop from './Utils/ScrollToTop';
import App from './App';

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
