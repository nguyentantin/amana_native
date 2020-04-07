import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'
import { inject, observer } from 'mobx-react'
import { SplashScreen } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
// @ts-ignore
import useLinking from '../navigations/useLinking'
import { AuthNavigator } from '../navigations/AuthNavogator'
import { HomeNavigator } from '../navigations/HomeNavogator'

interface MainContainerProps {
  appStore: any,
  skipLoadingScreen: boolean
  children: React.ReactElement
}

const AppContainer = (props: MainContainerProps): React.ReactElement | null => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  const [initialNavigationState, setInitialNavigationState] = React.useState()
  const containerRef = React.useRef()
  const {getInitialState} = useLinking(containerRef)
  const {isAuthenticated, initAppStore} = props.appStore

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      initAppStore()
      try {
        SplashScreen.preventAutoHide()

        // Load our initial navigation state
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
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle='default'/>}
      <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
        {isAuthenticated ? <HomeNavigator/> : <AuthNavigator/>}
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default inject('appStore')(observer(AppContainer))
