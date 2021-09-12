import React from 'react'

import { HashRouter, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { TokenBridgeAppLinks } from './components/TokenBridgeAppLinks'

// TODO 諸々機能拡充
export function Main() {
  return (
    <div>
      <HashRouter>
        <Header />

        <Switch>
          <Route path="/tokenBridgeAppLinks">
            <TokenBridgeAppLinks />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  )
}
