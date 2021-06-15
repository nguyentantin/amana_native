import React from 'react'
import { View } from 'react-native'
import { Text, Layout, Button } from '@ui-kitten/components'
import { inject, observer } from 'mobx-react'

import styles from './styles'
import { AppStorageService } from '../../services/app-storage.service'

interface ProfileScreenProps {
  appStore: any
}

@inject('appStore')
@observer
class ProfileScreen extends React.PureComponent<ProfileScreenProps> {
  constructor(prop: any) {
    super(prop)

    this.logout = this.logout.bind(this)
  }

  async logout() {
    const {appStore} = this.props
    await AppStorageService.revokeAuth()
    appStore.setIsAuthenticated(false)
    appStore.setAuthInfo({})
  }

  render(): React.ReactElement {
    return (
      <Layout style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            Profile Screen 🎉
          </Text>

          <Button onPress={this.logout}>Logout</Button>
        </View>
      </Layout>
    )
  }
}

export default ProfileScreen

