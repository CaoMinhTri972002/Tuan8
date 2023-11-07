import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";

import page1 from './page1';

const BottomTab = createBottomTabNavigator();
const Stack= createNativeStackNavigator();
export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'
             screenOptions={{headerShown:false}}
          >
<Stack.Screen name="page1" component={page1}/>



          </Stack.Navigator>
        </NavigationContainer>
  );
}


