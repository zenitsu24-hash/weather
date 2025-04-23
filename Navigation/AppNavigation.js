import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../Screen/HomeScreen'

const stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen options={{headerShown: false}} component={HomeScreen} name='Home'/>
        </stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation