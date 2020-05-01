import React from "react";
import styles from "../styles";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, TouchableOpacity } from "react-native";

import * as ImageManipulator from "expo-image-manipulator";
import { Camera } from "expo-camera";

import { uploadImage } from "../redux/actions/post";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class CameraUpload extends React.Component {
  snapPhoto = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      const image = await this.camera.takePictureAsync();
      const manipResult = await ImageManipulator.manipulateAsync(
        image.localUri || image.uri,
        [{ rotate: 90 }, { flip: ImageManipulator.FlipType.Vertical }],
        { compress: 0.1, format: ImageManipulator.SaveFormat.PNG }
      );
      console.log(manipResult);
      this.props.uploadImage(manipResult);
    }
  };

  render() {
    return (
      <Camera
        style={{ flex: 1 }}
        ref={(ref) => {
          this.camera = ref;
        }}
        type={Camera.Constants.Type.back}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ paddingLeft: 30 }}
            onPress={() => this.props.navigation.goBack()}
          >
            <Ionicons color={"white"} name={"ios-arrow-back"} size={50} />
          </TouchableOpacity>
        </SafeAreaView>
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={() => this.snapPhoto()}
        />
      </Camera>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ uploadImage }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CameraUpload);
