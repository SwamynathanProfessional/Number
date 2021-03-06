import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Start a New Game ! </Text>
      <Card style={styles.inputContainer}>
        <Text> Select a Number</Text>

        <View style={styles.buttonContainer}>
          <View style={styles.butto}>
            <Button title="Reset" color={Colors.accent} />
          </View>
          <View style={styles.butto}>
            <Button title="confirm" color={Colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    marginVertical: 10,
  },

  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
  },
  butto: {
    width: 80,
  },
  input: {
    width: 50,
  },
});

export default StartGameScreen;
