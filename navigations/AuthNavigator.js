import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import Signin from "../screens/Signin";
import Signup from "../screens/Signup";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator mode="card">
    <AuthStack.Screen name="Signin" component={Signin} />
    <AuthStack.Screen name="Signup" component={Signup} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
