import React from 'react'
import { View } from 'react-native'
import { Text, Layout, ListItem, Divider, List, Icon, Avatar, Button } from '@ui-kitten/components'
import { ProjectIcon } from '../../components/Icon'

import styles from './styles'

class ProjectListScreen extends React.PureComponent {
  constructor(prop: any) {
    super(prop)
  }

  private data = new Array(20).fill({
    title: 'Amana',
    description: 'Description for Amana project'
  })

  renderItemAvatar(props: any): React.ReactElement {
    return (
      <Avatar
        source={{ uri: 'https://databytenitt.github.io/img/male.png' }}
        {...props}
      />
    )
  }

  renderItem(props: any): React.ReactElement {
    const { item, index } = props
    return (
      <View style={styles.projectItem}>
        <View style={styles.projectAvatar}>
          <Avatar
            source={{ uri: 'https://databytenitt.github.io/img/male.png' }}
            {...props}
          />
        </View>
        <View style={styles.projectText}>
          <Text appearance='default'>{item.title} {index + 1}</Text>
          <Text appearance='hint'>{item.description} {index + 1}</Text>
        </View>
        <View style={styles.projectRight}>
          <View style={styles.projectRightNumberBuild}>
            <Text style={styles.textRight}>30 builds</Text>
          </View>
          <View style={styles.projectRightTimeAgo}>
            <Text appearance='hint' style={styles.textRight}>30 minutes ago</Text>
          </View>
        </View>
      </View>
    )
  }

  render(): React.ReactElement {
    return (
      <Layout style={styles.container}>
        <View style={{ flex: 1 }}>
          <List
            style={styles.container}
            data={this.data}
            ItemSeparatorComponent={Divider}
            renderItem={this.renderItem}
          />
        </View>
      </Layout>
    )
  }
}

export default ProjectListScreen

