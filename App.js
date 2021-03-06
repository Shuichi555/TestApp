import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import { Actions, Router, Scene } from 'react-native-router-flux';

import MenuPage from './MenuPage';
import PageB from './PageB';
import PageC from './PageC';

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
*/

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="MenuPage" initial component={MenuPage} title="MenuPage" />
    <Scene key="PageB" component={PageB} title="PageB" />
    <Scene key="PageC" component={PageC} title="PageC" />
  </Scene>
);

export default class extends Component {
  render() {
    return (
      <Router scenes={scenes}/>
    );
  }
}

/*
<View style={styles.container}>


<Scene
    key='login'
    component={Login}
/>
<Scene
    key='home'
    component={Home}
/>
<Scene
    key='profile'
    component={Profile}
/>

<Scene
    key='settings'
    component={Settings}
/>


*/


/* original
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
