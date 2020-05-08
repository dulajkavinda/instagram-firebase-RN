import React from "react";
import styles from "../styles";
import MapView from "react-native-maps";

export default ({ route }) => {
  const location = route.params.location;
  return (
    <MapView
      style={styles.container}
      initialRegion={{
        latitude: location.coords.lat,
        longitude: location.coords.lng,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      }}
    >
      <MapView.Marker
        coordinate={{
          latitude: location.coords.lat,
          longitude: location.coords.lng,
        }}
        title={location.name}
      />
    </MapView>
  );
};
