import React from 'react'
import ReactDOM from 'react-dom'
import { createRenderer } from 'fela'
import { Provider } from 'react-fela'
import Store from './Store'
import './index.css'
import App from './App'

const renderer = createRenderer()

ReactDOM.render(
  <Provider renderer={renderer}>
    <App store={new Store()} />
  </Provider>,
  document.getElementById('root')
)
