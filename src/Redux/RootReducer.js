import { combineReducers } from 'redux';
import UserReducers from './User/UserReducers';
import CartReducers from './Cart/CartReducers';


export default combineReducers({
  User: UserReducers,
  Cart: CartReducers
});
