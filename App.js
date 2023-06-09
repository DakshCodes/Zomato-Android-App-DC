
import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen name="Home" component={HomeScreen} />
     </Stack.Navigator>
    </NavigationContainer>

  );
}
export default App

