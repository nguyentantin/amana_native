import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, Layout } from '@ui-kitten/components'
import { inject, observer } from 'mobx-react'

import { AppStorageService } from '../../services/app-storage.service'

interface HomeScreenProps {
  appStore: any
}

@inject('appStore')
@observer
class HomeScreen extends React.PureComponent<HomeScreenProps> {
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
            Try editing me! 🎉
          </Text>
          <Button
            status='control'
            size='large'
            onPress={this.logout}
          >
            Logout
          </Button>
        </View>
      </Layout>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
})

export default HomeScreen

