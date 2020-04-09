import React from 'react'
import { View } from 'react-native'
import { Text, Layout } from '@ui-kitten/components'

import styles from './styles'

class ProfileScreen extends React.PureComponent {
  constructor(prop: any) {
    super(prop)
  }

  render(): React.ReactElement {
    return (
      <Layout style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            Profile Screen 🎉
          </Text>
        </View>
      </Layout>
    )
  }
}

export default ProfileScreen

