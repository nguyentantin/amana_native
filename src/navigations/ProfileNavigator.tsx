import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ProfileScreen from '../screens/Profile/ProfileScreen'

const Stack = createStackNavigator()

export const ProfileNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Profile' component={ProfileScreen}/>
  </Stack.Navigator>
)
