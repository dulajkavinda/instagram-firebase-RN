import React from "react";
import { Text, View, TextInput } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateDecription } from "../redux/actions/post";

import styles from "../styles";

class Post extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.border}
          value={this.props.post.description}
          onChangeText={(input) => this.props.updateDecription(input)}
          placeholder="Description"
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateDecription }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
