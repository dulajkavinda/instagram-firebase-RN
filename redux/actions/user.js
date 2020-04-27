import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_USERNAME,
  UPDATE_BIO,
  SIGNUP,
  SIGNIN,
} from "./actionTypes";

import { AsyncStorage } from "react-native";

import firebase from "firebase";

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

export const signin = () => {
  return async (dispatch, getState) => {
    const { email, password } = getState().user;

    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      alert(response);
      //dispatch({ type: SIGNIN, payload: response.user });
      AsyncStorage.setItem("userToken", response.user.uid, () => {
        console.warn("Done!");
      });
      dispatch({ type: SIGNIN, token: response.user.uid });
    } catch (error) {
      alert(error);
    }
  };
};

export const signup = () => {
  return async (dispatch, getState) => {
    const { email, password } = getState().user;

    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      alert(response);
    } catch (error) {
      alert(error);
    }
  };
};
