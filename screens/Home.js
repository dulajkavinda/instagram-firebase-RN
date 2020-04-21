import React from "react";
import { Text, View, Button } from "react-native";
import styles from "../styles.js";

class Home extends React.Component {
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

export default Home;
