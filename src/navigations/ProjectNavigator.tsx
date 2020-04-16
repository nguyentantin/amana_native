import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ProjectListScreen from '../screens/ProjectList/ProjectListScreen'

const Stack = createStackNavigator()

export const ProjectNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen name='ProjectList' options={{ title: 'Projects' }} component={ProjectListScreen}/>
  </Stack.Navigator>
)
