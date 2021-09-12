import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { store } from './store'

import { Main } from './Main'

const App = () => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Main />
      </React.StrictMode>
    </Provider>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
