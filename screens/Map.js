import React from "react";
import styles from "../styles";
import MapView from "react-native-maps";

class Map extends React.Component {
  render() {
    const { location } = this.props.navigation.state.params;
    return (
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: location.coords.lat,
          longitude: location.coords.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
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
  }
}

export default Map;
