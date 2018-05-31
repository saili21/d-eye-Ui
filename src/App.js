import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './common/store'
import AppContainer from './common/containers/appConatiner'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
