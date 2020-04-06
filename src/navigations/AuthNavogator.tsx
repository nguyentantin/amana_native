import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignInScreen from '../screens/SignIn/SignInScreen'
import SignUpScreen from '../screens/SignUp/SignUpScreen';

const Stack = createStackNavigator()

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
      <Stack.Screen name='SignUp' component={SignUpScreen}/>
      <Stack.Screen name='SignIn' component={SignInScreen}/>
  </Stack.Navigator>
)
