import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import myStore from './Redux/Store';
import App from './App';

const { Store, Persistor } = myStore;

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <PersistGate persistor={Persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
