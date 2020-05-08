import React from "react";
import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPosts, likePost, dislikePost } from "../redux/actions/post";

import styles from "../styles.js";

import { Ionicons } from "@expo/vector-icons";

class Home extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  navigateMap = (item) => {
    console.log(this.props.navigation);
    this.props.navigation.navigate("Map", { location: item.postLocation });
  };

  postLike = (post) => {
    const { uid } = this.props.user;
    if (post.likes.includes(uid)) {
      console.log("dislike");
    } else {
      this.props.likePost(post);
    }
  };

  render() {
    if (this.props.posts === null) return null;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.posts.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <View style={[styles.row, styles.center]}>
                <View style={[styles.row, styles.center]}>
                  {/* <Image style={styles.roundImage} source={{uri: item.photo}}/> */}
                  <Text>{item.email}</Text>
                  <TouchableOpacity onPress={() => this.navigateMap(item)}>
                    <Text>
                      {item.postLocation ? item.postLocation.name : null}
                    </Text>
                  </TouchableOpacity>
                </View>
                <Ionicons style={{ margin: 5 }} name="ios-flag" size={25} />
              </View>
              <TouchableOpacity onPress={() => this.postLike(item)}>
                <Image
                  style={styles.postPhoto}
                  source={{ uri: item.postPhoto }}
                />
              </TouchableOpacity>
              <View style={styles.row}>
                <Ionicons
                  style={{ margin: 5 }}
                  name="ios-heart-empty"
                  size={25}
                />
                <Ionicons
                  style={{ margin: 5 }}
                  name="ios-chatbubbles"
                  size={25}
                />
                <Ionicons style={{ margin: 5 }} name="ios-send" size={25} />
              </View>
              <Text>{item.postDescription}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPosts, likePost, dislikePost }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
