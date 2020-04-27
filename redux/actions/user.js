import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_USERNAME,
  UPDATE_BIO,
} from "./actionTypes";

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
