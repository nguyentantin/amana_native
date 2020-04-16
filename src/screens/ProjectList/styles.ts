import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  projectItem: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    // justifyContent: 'space-between',
    alignContent: 'stretch'
  },
  projectAvatar: {
    width: 50,
    alignSelf: 'flex-start'
  },
  projectText: {

  },
  projectRight: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
    width: 100,
  },
  projectRightNumberBuild: {
    // backgroundColor: 'pink',
    alignSelf: 'flex-end',
  },
  projectRightTimeAgo: {
    alignSelf: 'flex-end'
  },
  textRight: {
    fontSize: 12
  }
})


