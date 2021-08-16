import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NavigationContainer,
  useRoute,
  useNavigationState,
} from '@react-navigation/native';

const Results = ({navigation, route}) => {
  const previousRouteName = usePreviousRouteName();
  const [count, setcount] = useState(route.params);
  useEffect(() => {
    getData();
  });

  function usePreviousRouteName() {
    return useNavigationState(state =>
      state.routes[state.index - 1]?.name
        ? state.routes[state.index - 1].name
        : 'None',
    );
  }

  const getData = () => {
    try {
      AsyncStorage.getItem('userName').then(value => {
        if (value != null) {
        }
      });

      AsyncStorage.getItem('UserSelect').then(valu => {
        if (valu != null) {
          setcount(valu);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onpress = async () => {
    navigation.goBack();
    await AsyncStorage.setItem('UserName', 'Screen_B');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{paddingBottom: 20, fontSize: 30}}>
        {count} is selected !
      </Text>
      <Button title="Go BACK" onPress={onpress} />
    </View>
  );
};

export default Results;
