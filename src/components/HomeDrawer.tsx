import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import {
  Avatar,
  Divider,
  Drawer,
  DrawerElement,
  DrawerHeaderElement,
  DrawerHeaderFooter,
  DrawerHeaderFooterElement,
  Layout,
  MenuItemType,
  Text,
} from '@ui-kitten/components'
import { BookIcon, GithubIcon } from './Icon'
import { WebBrowserService } from '../services/web-browser.service'
import { AppInfoService } from '../services/app-info.service'
import { Image } from '../constants/Image'

const DATA: MenuItemType[] = [
  { title: 'Libraries', icon: GithubIcon },
  { title: 'Documentation', icon: BookIcon },
]

export const HomeDrawer = ({ navigation }: any): DrawerElement => {

  const onItemSelect = (index: number): void => {
    switch (index) {
      case 0: {
        navigation.toggleDrawer()
        navigation.navigate('Libraries')
        return
      }
      case 1: {
        WebBrowserService.openBrowserAsync('https://docs.amana.fun')
        navigation.toggleDrawer()
        return
      }
    }
  }

  const renderHeader = (): DrawerHeaderElement => (
    <Layout
      style={styles.header}
      level='2'>
      <View style={styles.profileContainer}>
        <Avatar
          size='giant'
          source={Image.logo_icon}
        />
        <Text
          style={styles.profileName}
          category='h6'>
          Amana Team
        </Text>
      </View>
    </Layout>
  )

  const renderFooter = (): DrawerHeaderFooterElement => (
    <React.Fragment>
      <Divider/>
      <DrawerHeaderFooter
        disabled={true}
        description={`Version ${AppInfoService.getVersion()}`}
      />
    </React.Fragment>
  )

  return (
    <SafeAreaView
      style={styles.safeArea}
    >
      <Drawer
        header={renderHeader}
        footer={renderFooter}
        data={DATA}
        onSelect={onItemSelect}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
})
