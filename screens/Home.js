import React from "react";
import { Text, View, Button } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { add, subtract } from "../redux/actions";
import styles from "../styles.js";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>How many apps are we going to build? {this.props.counter}</Text>
        <Button title="Add" onPress={() => this.props.add()} />
        <Button title="Subtract" onPress={() => this.props.subtract()} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ add, subtract }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
