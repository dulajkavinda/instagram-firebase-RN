import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Home from "./screens/Home.js";
import TabNavigator from "./navigations/TabNavigator";

class App extends React.Component {
  render() {
    return <TabNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
