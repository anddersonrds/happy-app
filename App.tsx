import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

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
      initialRegion={{
        latitude: -3.7733133,
        longitude: -38.5585407,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
      }}
    />
  </View>
);

export default App;
