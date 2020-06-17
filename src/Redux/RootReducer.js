import { combineReducers } from 'redux';
import userReducer from './User/UserReducers';

export default combineReducers({
  User: userReducer
});
