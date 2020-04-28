import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_USERNAME,
  UPDATE_BIO,
  SIGNUP,
  SIGNIN,
  USER_STATUS,
} from "./actionTypes";

import firebase from "firebase";
import db from "../../config/firabase";

export const updateEmail = (email) => {
  return { type: UPDATE_EMAIL, payload: email };
};

export const updatePassword = (password) => {
  return { type: UPDATE_PASSWORD, payload: password };
};

export const updateUsername = (username) => {
  return { type: UPDATE_USERNAME, payload: username };
};

export const updateBio = (bio) => {
  return { type: UPDATE_BIO, payload: bio };
};

export const getUserStatus = (user_status) => {
  return { type: USER_STATUS, payload: user_status };
};

export const signin = () => {
  return async (dispatch, getState) => {
    const { email, password } = getState().user;

    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      alert(response);
      dispatch({ type: SIGNIN, payload: response.user });
    } catch (error) {
      alert(error);
    }
  };
};

export const signup = () => {
  return async (dispatch, getState) => {
    const { email, password, bio, username } = getState().user;

    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      alert(response);

      if (response.user.uid) {
        let user = {
          uid: response.user.uid,
          email: email,
          bio: bio,
          username: username,
          photo: "",
          token: null,
        };
        let setUser = db.collection("users").doc(response.user.uid).set(user);
        dispatch({ type: SIGNIN, payload: response.user });
      }
    } catch (error) {
      alert(error);
    }
  };
};
