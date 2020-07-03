import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserReducers from './User/UserReducers';
import CartReducers from './Cart/CartReducers';

// Add Cart reducer to whitelist without User cuz firebase handle it
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['Cart']
};

const RootReducer = combineReducers({
  User: UserReducers,
  Cart: CartReducers
});

export default persistReducer(persistConfig, RootReducer);
