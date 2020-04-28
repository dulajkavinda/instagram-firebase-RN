import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import Loading from "../screens/Loading";

import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";
import StackTabScreen from "./StackNavigator";

import firebase from "firebase";

import { USER_STATUS, SIGNIN } from "../redux/actions/actionTypes";

export default () => {
  let isLoading = false;
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
