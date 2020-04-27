import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateEmail, updatePassword } from "../redux/actions/user.js";
import styles from "../styles.js";

class Signin extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Signin </Text>
        <TextInput
          value={this.props.user.email}
          onChangeText={(input) => this.props.updateEmail(input)}
          placeholder="Email"
        />
        <TextInput
          value={this.props.user.password}
          onChangeText={(input) => this.props.updatePassword(input)}
          placeholder="Password"
        />
        <Button
          title="Signup"
          onPress={() => this.props.navigation.navigate("Signup")}
        />
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
