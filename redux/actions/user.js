import firebase from "firebase";
import db from "../../config/firabase";

// user එකට අදාල action types  ටි​ක
import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_USERNAME,
  UPDATE_BIO,
  SIGNIN,
  USER_STATUS,
} from "./actionTypes";

// මේකෙන් තමයි user ​ගේ email එක update කරන්​නේ
export const updateEmail = (email) => {
  return { type: UPDATE_EMAIL, payload: email };
};

// මේකෙන් තමයි user ​ගේ password එක update කරන්​නේ
export const updatePassword = (password) => {
  return { type: UPDATE_PASSWORD, payload: password };
};

// මේකෙන් තමයි user ​ගේ username එක update කරන්​නේ
export const updateUsername = (username) => {
  return { type: UPDATE_USERNAME, payload: username };
};

// මේකෙන් තමයි user ​ගේ bio එක update කරන්​නේ
export const updateBio = (bio) => {
  return { type: UPDATE_BIO, payload: bio };
};

// මේකෙන් තමයි user ගේ status එක ගන්නේ ( log වෙලාද නැද්ද කිය​ල )
export const getUserStatus = (user_status) => {
  return { type: USER_STATUS, payload: user_status };
};

// මේක තමයි log වෙන function එ​ක
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

// මේක තමයි signup වෙන function එ​ක
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
