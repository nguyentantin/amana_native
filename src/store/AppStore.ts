import { observable, action } from 'mobx'

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
    this.authInfo = me
  }
}

export default new AppStore()
