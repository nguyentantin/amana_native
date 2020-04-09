import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ProjectListScreen from '../screens/ProjectList/ProjectListScreen'

const Stack = createStackNavigator()

export const ProjectNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='ProjectList' component={ProjectListScreen}/>
  </Stack.Navigator>
)
