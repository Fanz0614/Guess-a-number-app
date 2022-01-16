import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from './components';
import { Screen } from './screen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title='Guess a number' />
      <Screen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
