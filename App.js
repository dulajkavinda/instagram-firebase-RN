import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 10,
    };
  }

  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  substract = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>How many apps are we going to build? {this.state.count}</Text>
        <Button
          title="Add"
          onPress={() => {
            this.add();
          }}
        />
        <Button
          title="Substract"
          onPress={() => {
            this.substract();
          }}
        />
      </View>
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
