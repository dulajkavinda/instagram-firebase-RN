import * as React from "react";

// react-navigations වලට ඕනේ වෙන බම්​බු
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// රෙද්දෙ icons ටි​ක
import Ionicons from "react-native-vector-icons/Ionicons";

// screens ටික import කරගත්​තා.
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import Activity from "../screens/Activity";
import Post from "../screens/Post";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
          } else if (route.name === "Post") {
            iconName = focused
              ? "md-add-circle-outline"
              : "md-add-circle-outline";
          }

          // මෙතන අපිට ඕනේ කැමති component එකක් return කරන්න පුලුවන්..
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
      <Tab.Screen name="Home" component={Home} title="Home" />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
