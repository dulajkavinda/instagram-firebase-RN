import firebase from "firebase";
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
        postPhoto: post.photo,
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

      var storageRef = firebase.storage().ref();
      var uploadTask = storageRef.child("photos/" + uuid.v1()).put(blob, {
        contentType: "image/jpeg",
      });

      uploadTask.on(
        "state_changed",
        function (snapshot) {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING:
              console.log("Upload is running");
              break;
          }
        },
        function (error) {},
        function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log("File available at", downloadURL);
            dispatch({ type: UPDATE_PHOTO, payload: downloadURL });
          });
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
};
