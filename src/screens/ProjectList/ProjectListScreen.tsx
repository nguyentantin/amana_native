import React from 'react'
import { View } from 'react-native'
import { Text, Layout } from '@ui-kitten/components'

import styles from './styles'

class ProjectListScreen extends React.PureComponent {
  constructor(prop: any) {
    super(prop)
  }

  render(): React.ReactElement {
    return (
      <Layout style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            Project List Screen 🎉
          </Text>
        </View>
      </Layout>
    )
  }
}

export default ProjectListScreen

