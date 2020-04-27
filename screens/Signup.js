import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  updateEmail,
  updatePassword,
  updateBio,
  updateUsername,
  signup,
} from "../redux/actions/user";

class Signup extends React.Component {
  signup = () => {
    this.props.signup(this.props.user.email, this.props.user.password);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.border}
          value={this.props.user.email}
          onChangeText={(input) => this.props.updateEmail(input)}
          placeholder="Email"
        />
        <TextInput
          style={styles.border}
          value={this.props.user.password}
          onChangeText={(input) => this.props.updatePassword(input)}
          placeholder="Password"
        />
        <TextInput
          style={styles.border}
          value={this.props.user.username}
          onChangeText={(input) => this.props.updateUsername(input)}
          placeholder="Username"
        />
        <TextInput
          style={styles.border}
          value={this.props.user.bio}
          onChangeText={(input) => this.props.updateBio(input)}
          placeholder="Bio"
        />
        <TouchableOpacity style={styles.button} onPress={() => this.signup()}>
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { updateEmail, updatePassword, updateUsername, updateBio, signup },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
