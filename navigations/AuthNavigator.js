import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Loading from "../screens/Loading";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Signin" component={Signin} />
    <AuthStack.Screen name="Signup" component={Signup} />
    <AuthStack.Screen
      name="Loading"
      component={Loading}
      options={{
        headerShown: false,
      }}
    />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
