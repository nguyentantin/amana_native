import React from 'react'
import { StackActions, NavigationContainerRef } from '@react-navigation/native'

export const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef()

export function navigate(name: string, params?: object) {
  const {current}: any = navigationRef
  current?.navigate(name, params)
}

export function push(name: string, params?: object | undefined) {
  const {current}: any = navigationRef
  current?.dispatch(StackActions.push(name, params))
}
