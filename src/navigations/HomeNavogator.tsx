import React from 'react'
import { RouteProp } from '@react-navigation/core'
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { HomeBottomNavigation } from '../components/HomeBottomNavigation'
// import { HomeDrawer } from '../components/HomeDrawer'
import { DashboardNavigator } from './DashboardNavigator'
import { ProjectNavigator } from './ProjectNavigator'
import { ProfileNavigator } from './ProfileNavigator'

const BottomTab = createBottomTabNavigator()

/*
 * open Components tab as default.
 */
const initialTabRoute: string = 'Home'

const ROOT_ROUTES: string[] = ['Dashboard', 'Project', 'Profile']

const isOneOfRootRoutes = (currentRoute: RouteProp<any, any>): boolean => {
  return ROOT_ROUTES.find(route => currentRoute.name === route) !== undefined
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
    tabBar={props => <HomeBottomNavigation {...props} />}
  >
    <BottomTab.Screen name='Dashboard' component={DashboardNavigator}/>
    <BottomTab.Screen name='Project' component={ProjectNavigator}/>
    <BottomTab.Screen name='Profile' component={ProfileNavigator}/>
  </BottomTab.Navigator>
)

// const Layout = (): React.ReactElement => (
//   <Stack.Navigator headerMode='none'>
//     <Stack.Screen name='HomeTabsNavigator' component={HomeTabsNavigator}/>
//   </Stack.Navigator>
// )
//
// const DrawerNavigator = (): React.ReactElement => (
//   <Drawer.Navigator
//     screenOptions={{gestureEnabled: false}}
//     drawerContent={props => <HomeDrawer {...props}/>}
//   >
//     <Drawer.Screen name='Dashboard' component={Layout}/>
//   </Drawer.Navigator>
// )

export const HomeNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='HomeTabsNavigator' component={HomeTabsNavigator}/>
  </Stack.Navigator>
)
