import React from 'react'
import { StyleSheet } from 'react-native'
import { BottomNavigationTab, Divider, BottomNavigation } from '@ui-kitten/components'

import { LayoutIcon, ProjectIcon, SettingsIcon } from './Icon'

export const HomeBottomNavigation = (props: any): React.ReactElement => {

  const onSelect = (index: number): void => {
    props.navigation.navigate(props.state.routeNames[index])
  }

  return (
    <>
      <Divider/>
      <BottomNavigation
        appearance='noIndicator'
        selectedIndex={props.state.index}
        onSelect={onSelect}
        style={styles.container}
      >
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
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
})
