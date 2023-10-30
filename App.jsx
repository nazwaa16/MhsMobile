import { ScrollView, Text, Image } from 'react-native'
import React from 'react'
import Home from './src/pages/Home'; 
import Detail from './src/pages/Detail';
import Succes from './src/pages/succe'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Succes" component={Succes} options={{headerShown: false}} />
        <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

  


export default App