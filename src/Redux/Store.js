import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from './RootReducer';

const middlewares = [logger, ReduxThunk];

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default Store;
