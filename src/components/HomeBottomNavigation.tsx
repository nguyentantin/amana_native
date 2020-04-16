import React from 'react'
import { SafeAreaView } from 'react-native'
import { BottomNavigationTab, Divider, BottomNavigation } from '@ui-kitten/components'

import { LayoutIcon, ProjectIcon, SettingsIcon } from './Icon'

export const HomeBottomNavigation = (props: any): React.ReactElement => {

  const onSelect = (index: number): void => {
    props.navigation.navigate(props.state.routeNames[index])
  }

  return (
    <SafeAreaView>
      <Divider/>
      <BottomNavigation
        appearance='noIndicator'
        selectedIndex={props.state.index}
        onSelect={onSelect}>
        <BottomNavigationTab
          title='Dashboard'
          icon={LayoutIcon}
        />
        <BottomNavigationTab
          title='Project'
          icon={ProjectIcon}
        />
        <BottomNavigationTab
          title='Profile'
          icon={SettingsIcon}
        />
      </BottomNavigation>
    </SafeAreaView>
  )
}
