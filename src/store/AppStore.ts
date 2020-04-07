import { observable, action } from 'mobx'
import _ from 'lodash'

import { AppStorageService } from '../services/app-storage.service'

class AppStore {
  @observable loading = false

  @observable isAuthenticated = false

  @observable authInfo = {}

  @action setLoadingScreen(isLoading: boolean) {
    this.loading = isLoading
  }

  @action setIsAuthenticated(value: boolean) {
    this.isAuthenticated = value
  }

  @action setAuthInfo(me: object) {
    // @ts-ignore
    this.authInfo = me
  }

  @action initAppStore = async () => {
    try {
      const token = await AppStorageService.getAuthAccessToken()
      const me: any = await AppStorageService.getAuthInfo()
      this.isAuthenticated = !_.isEmpty(token)
      this.authInfo = JSON.parse(me)
    } catch (e) {
      this.isAuthenticated = false
      this.authInfo = {}
    }
  }
}

export default new AppStore()
