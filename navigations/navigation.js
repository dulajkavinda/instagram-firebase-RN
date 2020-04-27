import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import Loading from "../screens/Loading";

import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";
import firebase from "firebase";

import { USER_STATUS } from "../redux/actions/actionTypes";

export default () => {
  let isLoading = false;
  const isUserLogged = useSelector((state) => state.user.user_status);
  const dispatch = useDispatch();

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user.uid);
      dispatch({ type: USER_STATUS, payload: user.uid });
    } else {
      console.log("not logged");
    }
  });

  return (
    <NavigationContainer>
      {!isUserLogged ? <AuthNavigator /> : <TabNavigator />}
    </NavigationContainer>
  );
};
