import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";
import styles from "../styles";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateEmail, updatePassword } from "../redux/actions/user";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Signup </Text>
        <TextInput
          value={this.props.user}
          placeholder="usrname"
          onChangeText={(input) => {
            this.props.updateEmail(input);
          }}
        ></TextInput>
        <TextInput
          value={this.props.user}
          placeholder="password"
          onChangeText={(input) => {
            this.props.updatePassword(input);
          }}
        ></TextInput>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmail, updatePassword }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
