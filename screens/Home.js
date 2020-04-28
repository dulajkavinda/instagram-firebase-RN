import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPosts } from "../redux/actions/post";
import styles from "../styles.js";

class Home extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    if (this.props.posts.feed == null) return null;
    return (
      <View style={styles.container}>
        {/* <Image
          style={styles.postPhoto}
          source={{ uri: this.props.posts.feed[1].postPhoto }}
        />
        <Text>{this.props.posts.feed[1].postDescription}</Text> */}
        <FlatList
          data={this.props.posts.feed}
          renderItem={({ item }) => (
            <View>
              <Image
                style={styles.postPhoto}
                source={{ uri: item.postPhoto }}
              />
              <Text>{item.postDescription}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
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
