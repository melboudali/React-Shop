import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from './RootReducer';

// Logger must be the last or we get undefined actions
const middlewares = [ReduxThunk];

// remove redux-logger & redux-devtools-extension from production
export const Store = createStore(
  RootReducer,
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares, logger))
);

export const Persistor = persistStore(Store);
