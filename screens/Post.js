import React from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  FlatList,
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
    locations: [],
  };

  post = () => {
    this.props.uploadPost();
    this.props.navigation.navigate("Home");
  };

  setLocation = (location) => {
    const place = {
      name: location.name,
      coords: {
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng,
      },
    };
    this.setState({ showModal: false });
    this.props.updateLocation(place);
  };

  // ලග තියන locations google places api එකෙන්
  // ගන්න method එක.
  getLocations = async () => {
    this.setState({ showModal: true });
    // location services use කරන්න permissions
    const permission = await Location.requestPermissionsAsync();
    if (permission.status === "granted") {
      console.log(permission);
      // දැන් ඉන්න තැන posiotion එ​ක
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
      const url = `${GOOGLE_API}?location=${location.coords.latitude},${location.coords.longitude}&rankby=distance&key=AIzaSyCH8A2ZSYykS30D2c1BKfCSIZ_ERNUAPnM`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      this.setState({ locations: data.results });
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
          <FlatList
            keyExtractor={(item) => item.id}
            data={this.state.locations}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.border}
                onPress={() => this.setLocation(item)}
              >
                <Text style={styles.gray}>{item.name}</Text>
                <Text style={styles.gray}>{item.vicinity}</Text>
              </TouchableOpacity>
            )}
          />
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
        <TouchableOpacity style={styles.border} onPress={this.getLocations}>
          <Text style={styles.gray}>
            {this.props.post.location
              ? this.props.post.location.name
              : "Add a Location"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          style={styles.button}
          onPress={this.post}
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
