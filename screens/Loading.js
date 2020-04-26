import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Loading </Text>
      </View>
    );
  }
}
