import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'connected-react-router'
import 'lib-flexible/flexible'
import './assets/styles/reset.scss'
import './assets/styles/index.scss'
import Routes from './Routes'
import store, { history } from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Routes></Routes>,
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById('root')
)
