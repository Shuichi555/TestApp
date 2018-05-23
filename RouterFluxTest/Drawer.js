import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

const DrawerContent = () => (
  <View style={styles.container}>
    <Text>PageA</Text>
    <TouchableOpacity onPress={Actions.PageA}>
      <Text style={styles.linkText}>Link</Text>
    </TouchableOpacity>
  </View>
);
export default DrawerContent;
