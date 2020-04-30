import React from "react";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from "../navigations/TabNavigator";

const StackTab = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 120, height: 35 }}
      source={require("../assets/logo.jpg")}
    />
  );
}

function CameraButton() {
  return <Ionicons style={{ marginLeft: 10 }} name="ios-camera" size={30} />;
}

function MessageButton() {
  return <Ionicons style={{ marginRight: 10 }} name="ios-send" size={30} />;
}

const StackTabScreen = () => (
  <StackTab.Navigator>
    <StackTab.Screen
      name="🔥Instagram 🔥"
      component={TabNavigator}
      options={{
        headerTitleAlign: "center",
        headerTitle: (props) => <LogoTitle {...props} />,
        headerLeft: (props) => <CameraButton {...props} />,
        headerRight: (props) => <MessageButton {...props} />,
      }}
    />
  </StackTab.Navigator>
);

export default StackTabScreen;
