import {
  SET_CURRENT_USER,
  SET_AUTH_ERROR,
  CLEAR_AUTH_ERROR,
  EMAIL_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_SUCCESS,
  FACEBOOK_SIGN_IN_SUCCESS,
  GITHUB_SIGN_IN_SUCCESS
} from './UserTypes';

const INITIAL_STATE = {
  currentUser: null,
  authLoading: true,
  authErrors: []
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
    case EMAIL_SIGN_IN_SUCCESS:
    case GOOGLE_SIGN_IN_SUCCESS:
    case FACEBOOK_SIGN_IN_SUCCESS:
    case GITHUB_SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload, authLoading: false, authErrors: [] };
    case SET_AUTH_ERROR:
      return {
        ...state,
        currentUser: null,
        authLoading: false,
        authErrors: [...state.authErrors, action.payload]
      };
    case CLEAR_AUTH_ERROR:
      return { ...state, authLoading: false, authErrors: [] };
    default:
      return state;
  }
};

export default UserReducer;
