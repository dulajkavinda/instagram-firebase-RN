import {
  ADD,
  SUBTRACT,
  UPDATE_PASSWORD,
  UPDATE_EMAIL,
} from "../actions/actionTypes";
import { combineReducers } from "redux";

const counter = (state = 115, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case SUBTRACT:
      return state - 1;
    default:
      return state;
  }
};

const user = (state = 115, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD:
      console.log("updatePassword reducer" + action.payload);
      return { ...state, password: action.payload };
    case UPDATE_EMAIL:
      console.log("updateEmail reducer" + action.payload);
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  counter,
  user,
});
