import { SET_CURRENT_USER } from '../Types';

// export const setCurrentUser = user => dispatch =>
//   dispatch({ type: SET_CURRENT_USER, payload: user });
export const setCurrentUser = user => ({ type: SET_CURRENT_USER, payload: user });
