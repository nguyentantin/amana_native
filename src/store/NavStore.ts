import { observable, action } from 'mobx'
import { CommonActions } from '@react-navigation/native'

class NavStore {
  @observable.ref navigator = null

  @action goBack() {
    // @ts-ignore
    this.navigator.dispatch(CommonActions.goBack())
  }

  @action push() {

  }
}

export default new NavStore()
