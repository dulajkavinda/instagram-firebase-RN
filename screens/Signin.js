import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Signin </Text>
        <Button
          title="Sign Up"
          onPress={() => {
            this.props.navigation.navigate("Signup");
          }}
        />
      </View>
    );
  }
}

export default Signin;
