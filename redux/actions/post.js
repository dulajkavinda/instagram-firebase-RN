import firabase from "firebase";
import db from "../../config/firabase";

import { UPDATE_DESCRIPTION } from "./actionTypes";

export const updateDecription = (description) => {
  return { type: UPDATE_DESCRIPTION, payload: description };
};
