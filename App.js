import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Home from "./screens/Home.js";
import TabNavigator from "./navigations/TabNavigator";

import { initStore } from "./redux/store";
import { Provider } from "react-redux";

const store = initStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    );
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
