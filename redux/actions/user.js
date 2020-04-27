import { UPDATE_EMAIL, UPDATE_PASSWORD } from "./actionTypes";

export const updateEmail = (email) => {
  console.log("updateEmail action");
  return { type: UPDATE_EMAIL, payload: email };
};

export const updatePassword = (password) => {
  console.log("updatePassword action");
  return { type: UPDATE_PASSWORD, payload: password };
};
