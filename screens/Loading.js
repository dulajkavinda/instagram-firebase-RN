import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "../styles.js";

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Loading </Text>
      </View>
    );
  }
}
