import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import mapMarker from '@assets/map-marker.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

const App: React.FC = () => (
  <View style={styles.container}>
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: -3.7733133,
        longitude: -38.5585407,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
      }}
    >
      <Marker
        icon={mapMarker}
        coordinate={{
          latitude: -3.7733133,
          longitude: -38.5585407,
        }}
      >
        <Callout>
          <Text>Lar das meninas</Text>
        </Callout>
      </Marker>
    </MapView>
  </View>
);

export default App;
