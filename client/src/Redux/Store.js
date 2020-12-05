import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './RootSaga';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './RootReducer';

const SagaMidleware = createSagaMiddleware();
const middlewares = [SagaMidleware];

export const Store = createStore(
  RootReducer,
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares, logger))
);

SagaMidleware.run(RootSaga);

export const Persistor = persistStore(Store);
