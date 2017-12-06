import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './Style.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
