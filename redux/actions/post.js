import firabase from "firebase";
import db from "../../config/firabase";

import uuid from "react-native-uuid";

import { UPDATE_DESCRIPTION, GET_POSTS, UPDATE_PHOTO } from "./actionTypes";

export const updateDecription = (description) => {
  return { type: UPDATE_DESCRIPTION, payload: description };
};

export const updatePhoto = (photopath) => {
  return { type: UPDATE_PHOTO, payload: photopath };
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

export const getPosts = () => {
  return async (dispatch, getState) => {
    try {
      const posts = await db.collection("posts").get();

      let array = [];
      posts.forEach((post) => {
        array.push(post.data());
      });
      dispatch({ type: GET_POSTS, payload: array });
    } catch (e) {
      alert(e);
    }
  };
};

export const uploadImage = (image) => {
  return async (dispatch, getState) => {
    try {
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };

        xhr.onerror = function () {
          reject(new Error("uriToBlob failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", image.uri, true);
        xhr.send(null);
      });

      var storageRef = firabase.storage().ref();
      storageRef
        .child("photos/" + uuid.v1())
        .put(blob, {
          contentType: "image/jpeg",
        })
        .then((snapshot) => {
          blob.close();
          resolve(snapshot);
          alert("done");
        })
        .catch((error) => {
          reject(error);
        });

      storageRef.getDownloadURL().then((url) => console.log(url));
    } catch (e) {
      console.log(e);
    }
  };
};
