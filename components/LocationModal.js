import React from "react";
import { View, Text } from "react-native";

import { useDispatch } from "react-redux";
import { UPDATE_LOCATION } from "../redux/actions/actionTypes";

const LocationModal = () => {
  const dispatch = useDispatch();

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={this.props.showModal}
    >
      <SafeAreaView style={[styles.container, styles.center]}>
        <TouchableOpacity
          style={styles.border}
          onPress={() =>
            dispatch({ type: UPDATE_LOCATION, payload: "Philadelphia" })
          }
        >
          <Text style={styles.gray}>Philadelphia</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};

export default LocationModal;
