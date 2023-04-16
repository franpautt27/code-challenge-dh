import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/pages/Home';
import Detail from '../components/pages/Detail';
import appColors from '../constants/colors';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{
            headerStyle: {
                backgroundColor: appColors.headerColor,
              },
        }} name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack