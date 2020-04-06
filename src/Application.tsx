import React from 'react'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { mapping, light } from '@eva-design/eva'
import { Provider } from 'mobx-react'

import store from './store'
import { AppNavigator } from './navigations/AppNavogator'

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider mapping={mapping} theme={light}>
          <AppNavigator/>
        </ApplicationProvider>
      </Provider>
    </React.Fragment>
  )
}

export default App
