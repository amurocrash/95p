import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Splash from './components/Splash'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/splash' component={ Splash }></Route>
        <Route path='/shopping' component={ App } exact></Route>
        <Route path='/sell' component={ App } ></Route>
        <Route path='/my' component={ App } ></Route>
      </Switch>
    </HashRouter>
  )
}

export default Routes
