import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import AuthNavigator from "./AuthNavigator";
import StackTabScreen from "./StackNavigator";

import firebase from "firebase";

import { SIGNIN } from "../redux/actions/actionTypes";

export default () => {
  const isUserLogged = useSelector((state) => state.user.uid);
  const dispatch = useDispatch();

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user.uid);
      dispatch({ type: SIGNIN, payload: user });
    } else {
      console.log("not logged");
    }
  });

  return (
    <NavigationContainer>
      {isUserLogged == null ? <AuthNavigator /> : <StackTabScreen />}
    </NavigationContainer>
  );
};
