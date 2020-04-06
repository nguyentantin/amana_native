import { Dimensions } from 'react-native'

export enum Layout {
  width = Dimensions.get('window').width,
  height = Dimensions.get('window').height,
}
