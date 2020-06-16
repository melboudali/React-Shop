import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from './RootReducer';

const middlewares = [logger];

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default Store;
