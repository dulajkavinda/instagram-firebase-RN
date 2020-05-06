import React from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  updateDecription,
  uploadPost,
  updateLocation,
} from "../redux/actions/post";

import * as Location from "expo-location";
const GOOGLE_API =
  "https://maps.googleapis.com/maps/api/place/nearbysearch/json";

import styles from "../styles";

class Post extends React.Component {
  state = {
    showModal: false,
  };

  post = () => {
    this.props.uploadPost();
    this.props.navigation.navigate("Home");
  };

  setLocation = (location) => {
    this.setState({ showModal: false });
    this.props.updateLocation(location);
  };

  getLocations = async () => {
    this.setState({ showModal: true });
    const permission = await Location.requestPermissionsAsync();
    if (permission.status === "granted") {
      console.log(permission);
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
      const url = `${GOOGLE_API}?location=${location.coords.latitude},${location.coords.longitude}&rankby=distance&key=AIzaSyCH8A2ZSYykS30D2c1BKfCSIZ_ERNUAPnM`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      this.setState({ locations: data.results });
      console.log(data);
    }
  };

  modal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.showModal}
      >
        <SafeAreaView style={[styles.container, styles.center]}>
          <TouchableOpacity
            style={styles.border}
            onPress={() => this.setLocation("Philadelphia")}
          >
            <Text style={styles.gray}>Philadelphia</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.modal()}
        <Image
          style={styles.postPhoto}
          source={{
            uri: this.props.post.photo,
          }}
        />
        <TextInput
          style={styles.border}
          value={this.props.post.description}
          onChangeText={(input) => this.props.updateDecription(input)}
          placeholder="Description"
        />
        <TouchableOpacity
          style={styles.border}
          onPress={() => this.setState({ showModal: true })}
        >
          <Text style={styles.gray}>
            {this.props.post.location
              ? this.props.post.location
              : "Add a Location"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          style={styles.button}
          onPress={this.getLocations}
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
  return bindActionCreators(
    { updateDecription, uploadPost, updateLocation },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
