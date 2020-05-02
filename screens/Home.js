import React from "react";
import { Text, View, Image, FlatList } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPosts } from "../redux/actions/post";

import styles from "../styles.js";

import { Ionicons } from "@expo/vector-icons";

class Home extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

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
                </View>
                <Ionicons style={{ margin: 5 }} name="ios-flag" size={25} />
              </View>
              <Image
                style={styles.postPhoto}
                source={{ uri: item.postPhoto }}
              />

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
  return bindActionCreators({ getPosts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
