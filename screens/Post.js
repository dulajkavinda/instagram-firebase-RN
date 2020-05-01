import React from "react";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateDecription, uploadPost } from "../redux/actions/post";

import styles from "../styles";

class Post extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.postPhoto}
          source={{
            uri: this.props.post.uri,
          }}
        />
        <TextInput
          style={styles.border}
          value={this.props.post.description}
          onChangeText={(input) => this.props.updateDecription(input)}
          placeholder="Description"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.uploadPost()}
        >
          <Text>Post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateDecription, uploadPost }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
