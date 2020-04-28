import {
  UPDATE_PASSWORD,
  UPDATE_EMAIL,
  UPDATE_BIO,
  UPDATE_USERNAME,
  SIGNIN,
  SIGNUP,
  USER_STATUS,
  UPDATE_DESCRIPTION,
} from "../actions/actionTypes";
import { combineReducers } from "redux";

const user = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return { ...state, password: action.payload };
    case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case UPDATE_BIO:
      return { ...state, bio: action.payload };
    case UPDATE_USERNAME:
      return { ...state, username: action.payload };
    case SIGNIN:
      return action.payload;
    case SIGNUP:
      return action.payload;
    case USER_STATUS:
      return { ...state, user_status: action.payload, is_loading: false };
    default:
      return state;
  }
};

const post = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_DESCRIPTION:
      return { ...state, description: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  user,
  post,
});
