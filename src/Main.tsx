import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header'

// TODO 諸々機能拡充
export function Main() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Switch>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
