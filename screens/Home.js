import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPosts } from "../redux/actions/post";
import styles from "../styles.js";

class Home extends React.Component {
  componentWillMount() {
    this.props.getPosts();
  }

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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPosts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
