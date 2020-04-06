import { Image } from 'react-native'
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'

/**
 * Cache Image.
 *
 * @param images
 */
export const cacheImages = (images: []) => {
  return images.map((image: any) => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  })
}

/**
 * Cache Font.
 * @param fonts
 */
export const cacheFonts = (fonts: [{ [p: number]: any }]) => {
  return fonts.map(font => Font.loadAsync(font))
}
