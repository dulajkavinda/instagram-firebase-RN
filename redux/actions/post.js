import firabase from "firebase";
import db from "../../config/firabase";

import { UPDATE_DESCRIPTION } from "./actionTypes";

export const updateDecription = (description) => {
  return { type: UPDATE_DESCRIPTION, payload: description };
};

export const uploadPost = () => {
  return async (dispatch, getState) => {
    try {
      const { post, user } = getState();

      const upload = {
        uid: user.uid,
        postDescription: post.description,
        postPhoto:
          "https://firebasestorage.googleapis.com/v0/b/instagram-rn-fca81.appspot.com/o/galaxy.jpg?alt=media&token=2a60bd49-60ba-4f36-ab00-fa5c42136614",
        username: user.email,
      };

      let ref = await db.collection("posts").doc();
      upload.id = ref.id;
      ref.set(upload);
    } catch (error) {
      alert(error);
    }
  };
};
