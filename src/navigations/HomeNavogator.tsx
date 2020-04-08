import React from 'react'
import { RouteProp } from '@react-navigation/core'
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/Home/HomeScreen'
import { HomeBottomNavigation } from '../components/HomeBottomNavigation'

const BottomTab = createBottomTabNavigator()

/*
 * open Components tab as default.
 */
const initialTabRoute: string = 'Home'

/*
 * Can we access it from `HomeNavigator`?
 */
const ROOT_ROUTES: string[] = ['Home']

const isOneOfRootRoutes = (currentRoute: RouteProp<any, any>): boolean => {
  return ROOT_ROUTES.find(route => currentRoute.name === route) !== undefined;
}

const TabBarVisibleOnRootScreenOptions = ({route}: any): BottomTabNavigationOptions => {
  const currentRoute = route.state && route.state.routes[route.state.index]
  return {tabBarVisible: currentRoute && isOneOfRootRoutes(currentRoute)}
}

const Stack = createStackNavigator()

const HomeTabsNavigator = (): React.ReactElement => (
  <BottomTab.Navigator
    screenOptions={TabBarVisibleOnRootScreenOptions}
    initialRouteName={initialTabRoute}
    tabBar={props => <HomeBottomNavigation {...props} />}>
    <BottomTab.Screen name='Home' component={HomeScreen}/>
  </BottomTab.Navigator>
)

export const HomeNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='HomeTabsNavigator' component={HomeTabsNavigator}/>
  </Stack.Navigator>
)
