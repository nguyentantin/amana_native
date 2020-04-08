import React from 'react'
import { Platform, StatusBar } from 'react-native'
import * as Font from 'expo-font'
import { inject, observer } from 'mobx-react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { SplashScreen } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import useLinking from '../navigations/useLinking'
import { AuthNavigator } from '../navigations/AuthNavogator'
import { HomeNavigator } from '../navigations/HomeNavogator'
import { navigationRef } from '../navigations'
import Loader from '../components/Loader'

interface MainContainerProps {
  appStore: any,
  skipLoadingScreen: boolean
  children: React.ReactElement
}

const AppContainer = (props: MainContainerProps): React.ReactElement | null => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  const [initialNavigationState, setInitialNavigationState] = React.useState()
  // const containerRef = React.useRef()
  const { getInitialState } = useLinking(navigationRef)
  const { isAuthenticated, initAppStore} = props.appStore

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      initAppStore()
      try {
        SplashScreen.preventAutoHide()

        // Load our initial navigation state
        // @ts-ignore
        setInitialNavigationState(await getInitialState())

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'opensans-regular': require('../assets/fonts/opensans-regular.ttf'),
          'roboto-regular': require('../assets/fonts/roboto-regular.ttf'),
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hide()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null
  }

  return (
    <SafeAreaProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle='default'/>}
      <Loader loading={props.appStore.loading}/>
      <NavigationContainer ref={navigationRef} initialState={initialNavigationState}>
        {isAuthenticated ? <HomeNavigator/> : <AuthNavigator/>}
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default inject('appStore')(observer(AppContainer))
