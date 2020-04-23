import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// screens ටික import කරගන්න.
import Home from "../screens/Home";
import Profile from "../screens/Home";
import Search from "../screens/Search";
import Activity from "../screens/Activity";
import Upload from "../screens/Upload";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home";
            } else if (route.name === "Profile") {
              iconName = focused ? "ios-person" : "ios-person";
            } else if (route.name === "Search") {
              iconName = focused ? "ios-search" : "ios-search";
            } else if (route.name === "Activity") {
              iconName = focused ? "ios-grid" : "ios-grid";
            } else if (route.name === "Upload") {
              iconName = focused ? "ios-cloud-upload" : "ios-cloud-upload";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "gray",
          labelStyle: {
            fontSize: 12,
          },
          style: {
            marginTop: 2,
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Upload" component={Upload} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
