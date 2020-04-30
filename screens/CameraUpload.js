import React from "react";
import styles from "../styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { Camera, Permissions } from "expo-camera";
import { connect } from "react-redux";

class CameraUpload extends React.Component {
  snapPhoto = async () => {
    const permission = await Permissions.askAsync(Permissions.CAMERA);
    if (permission.status === "granted") {
      const image = await this.camera.takePictureAsync();
      console.log(image);
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

export default connect(mapStateToProps)(CameraUpload);
