import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateEmail, updatePassword } from "../redux/actions/user.js";
import styles from "../styles.js";

class Signin extends React.Component {
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

        <TouchableOpacity style={styles.button}>
          <Text>Signin</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Signup")}
        >
          <Text>Signup</Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
