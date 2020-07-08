import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from './RootReducer';

// Logger must be the last or we get undefined actions
const middlewares = [ReduxThunk];

// remove redux-logger & redux-devtools-extension from production
const Store = createStore(
  RootReducer,
  process.env.NODE_ENV
  ? composeWithDevTools(applyMiddleware(...middlewares, logger))
  : applyMiddleware(...middlewares)
);

const Persistor = persistStore(Store);

export default { Store, Persistor };
