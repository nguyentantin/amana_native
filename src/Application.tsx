import React from 'react'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { mapping, light } from '@eva-design/eva'
import { Provider } from 'mobx-react'

import store from './store'
import AppContainer from './app/AppContainer'

const App = (props: any) => {
  return (
    <React.Fragment>
      <Provider {...store}>
        <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider mapping={mapping} theme={light}>
          <AppContainer {...props}/>
        </ApplicationProvider>
      </Provider>
    </React.Fragment>
  )
}

export default App
