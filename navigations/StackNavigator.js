import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from "../navigations/TabNavigator";
import CameraUpload from "../screens/CameraUpload";

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
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
      <Ionicons style={{ marginLeft: 10 }} name="ios-camera" size={30} />
    </TouchableOpacity>
  );
}

function MessageButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <Ionicons style={{ marginRight: 10 }} name="ios-send" size={30} />
    </TouchableOpacity>
  );
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
    <StackTab.Screen
      name="Camera"
      component={CameraUpload}
      options={{
        headerTitleAlign: "center",
        headerShown: false,
      }}
    />
  </StackTab.Navigator>
);

export default StackTabScreen;
