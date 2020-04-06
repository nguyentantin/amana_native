import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import { AuthNavigator } from './AuthNavogator'

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
}

export const AppNavigator = (): React.ReactElement => (
  <NavigationContainer theme={navigatorTheme}>
    <AuthNavigator/>
  </NavigationContainer>
)
