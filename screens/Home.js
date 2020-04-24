import React from "react";
import { Text, View, Button } from "react-native";
import styles from "../styles.js";

import { TEST_ACTION } from "../redux/actions/index.actions";

import { connect } from "react-redux";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 10,
    };
  }

  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  substract = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>How many apps are we going to build?? {this.props.counter}</Text>
        <Button
          title="Add"
          onPress={() => {
            this.add();
          }}
        />
        <Button
          title="Substract"
          onPress={() => {
            this.substract();
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
