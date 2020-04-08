import React from 'react'
import { useLinking, NavigationContainerRef } from '@react-navigation/native'
import { Linking } from 'expo'

export default function (containerRef: React.RefObject<NavigationContainerRef>) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'home',
        },
      },
    },
  })
}
