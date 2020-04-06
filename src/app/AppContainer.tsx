import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

import { SplashImage, LoadingAnimationProps } from '../components/SplashImage'
import { Image } from '../constants/Image'
import { cacheFonts, cacheImages } from '../utils/helpers'

const SplashScreen = ({loading}: LoadingAnimationProps): React.ReactElement | null => (
  <SplashImage
    loading={loading}
    source={Image.splash}
  />
)

export default class AppContainer extends React.Component {
  state = {
    isReady: false,
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([])

    const fontAssets = cacheFonts([FontAwesome.font])

    await Promise.all([...imageAssets, ...fontAssets])
  }
}
