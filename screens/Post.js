import React from "react";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateDecription } from "../redux/actions/post";

import styles from "../styles";

class Post extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.postPhoto}
          source={{
            uri:
              "https://firebasestorage.googleapis.com/v0/b/instagram-rn-fca81.appspot.com/o/galaxy.jpg?alt=media&token=2a60bd49-60ba-4f36-ab00-fa5c42136614",
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
          onPress={() => this.props.navigation.navigate("Signup")}
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
  return bindActionCreators({ updateDecription }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
