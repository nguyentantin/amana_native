import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignInScreen from '../screens/SignIn/SignInScreen'

const Stack = createStackNavigator()

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='SignIn' component={SignInScreen}/>
    <Stack.Screen name='SignUp' component={SignInScreen}/>
  </Stack.Navigator>
)
