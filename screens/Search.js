import React from "react";
import { Text, View } from "react-native";

import { connect } from "react-redux";

import styles from "../styles.js";

class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Search {this.props.counter}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

export default connect(mapStateToProps)(Search);
