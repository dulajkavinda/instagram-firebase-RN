import { UPDATE_EMAIL, UPDATE_PASSWORD } from "./actionTypes";

export const updateEmail = (email) => {
  return { type: UPDATE_EMAIL, payload: email };
};

export const updatePassword = (password) => {
  return { type: UPDATE_PASSWORD, payload: password };
};
