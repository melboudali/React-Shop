import { SET_CURRENT_USER, SET_AUTH_ERROR } from './UserTypes';

const INITIAL_STATE = {
  currentUser: null,
  authErrors: []
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload, authErrors: [] };
    case SET_AUTH_ERROR:
      return { ...state, currentUser: null, authErrors: [...state.authErrors, action.payload] };
    default:
      return state;
  }
};

export default UserReducer;
