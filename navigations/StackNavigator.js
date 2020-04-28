import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from "../navigations/TabNavigator";

const StackTab = createStackNavigator();

const StackTabScreen = () => (
  <StackTab.Navigator>
    <StackTab.Screen
      name="🔥Instagram 🔥"
      component={TabNavigator}
      options={{ headerTitleAlign: "center" }}
    />
  </StackTab.Navigator>
);

export default StackTabScreen;
