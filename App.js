import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screen/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title={'Guess a Number now'} />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
