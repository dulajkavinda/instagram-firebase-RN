import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import styles from "../styles.js";

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.user.email}</Text>
        <Text>{this.props.user.uid}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Profile);
