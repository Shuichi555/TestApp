import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 32,
    color: 'rgb(95, 177, 237)',
  },
});

const PageB = () => (
  <View style={styles.container}>
    <Text>PageB</Text>
    <TouchableOpacity onPress={Actions.PageC}>
      <Text style={styles.linkText}>Link</Text>
    </TouchableOpacity>
  </View>
);
export default PageB;
