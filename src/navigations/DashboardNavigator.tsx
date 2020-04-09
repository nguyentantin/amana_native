import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DashboardScreen from '../screens/Dashboard/DashboardScreen'

const Stack = createStackNavigator()

export const DashboardNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Dashboard' component={DashboardScreen}/>
  </Stack.Navigator>
)
