import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const NumberContainer = props => (
  <View style={styles.Container}>
    <Text style={styles.number}>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  Container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NumberContainer;
