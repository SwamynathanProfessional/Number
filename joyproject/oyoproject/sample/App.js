import ExitPage from './screens/ExitPage';
import StartLoginScreen from './screens/StartLoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Results from './screens/Results';
import React from 'react';

const Tab = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Screen_A"
          component={StartLoginScreen}
          options={{
            title: 'LoginScreen',
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Screen_B"
          component={ExitPage}
          options={{
            title: 'HomeScreen',
            header: () => null,
            tabBarBadge: 3,
          }}
        />

        <Tab.Screen
          name="Screen_C"
          component={Results}
          options={{
            title: 'ResultScreen',
            header: () => null,
            tabBarBadge: 3,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
