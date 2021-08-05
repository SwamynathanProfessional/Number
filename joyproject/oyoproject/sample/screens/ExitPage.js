import React from 'react';
import {View, StyleSheet, Text, Alert, Button} from 'react-native';
const ExitPage = ({route, navigation}) => {
  const {userName, Password} = route.params;
  const OnReturnBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.input}>
      <Text style={styles.text}>Login successful !</Text>
      <View style={styles.button}>
        <Button title="LOGOUT" onPress={OnReturnBack} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    paddingTop: '5%',
    paddingBottom: '5%',
  },
});

export default ExitPage;
