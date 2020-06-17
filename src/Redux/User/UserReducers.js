import { SET_CURRENT_USER, SET_AUTH_ERROR } from './UserTypes';

const INITIAL_STATE = {
  currentUser: null,
  authErrors: []
};

const UserReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload, authErrors: [] };
    case SET_AUTH_ERROR:
      return { ...state, authErrors: [...state.authErrors, payload] };
    default:
      return state;
  }
};

export default UserReducer;
