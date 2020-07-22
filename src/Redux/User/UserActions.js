// import { auth, createUserProfileDoc } from '../../Utils/Firebase';
import { SET_CURRENT_USER, SET_AUTH_ERROR, CLEAR_AUTH_ERROR } from './UserTypes';

export const setCurrentUser = user => dispatch => {
  dispatch({ type: SET_CURRENT_USER, payload: user });
  //@FIXME: fix this later
  // const UserData = auth.onAuthStateChanged();
  // console.log(UserData);
  // if (UserData) {
  //   const userRef = await createUserProfileDoc(UserData);
  //   dispatch({
  //     type: SET_CURRENT_USER,
  //     payload: {
  //       id: userRef.id,
  //       ...userRef.data()
  //     }
  //   });
  // } else {
  //   dispatch({
  //     type: SET_CURRENT_USER,
  //     payload: null
  //   });
  // }
};

export const setAuthError = error => dispatch => dispatch({ type: SET_AUTH_ERROR, payload: error });

export const clearAuthError = () => ({ type: CLEAR_AUTH_ERROR });
