import React from 'react'

import { useHistory } from 'react-router-dom'

import { NetworkSelector } from './NetworkSelector'

export function Header() {
  const history = useHistory()

  const onClickTitle = () => {
    history.push('/')
  }

  const onClickHome = () => {
    history.push('/')
  }

  const onClickTokenBridgeLinks = () => {
    history.push('/tokenBridgeAppLinks')
  }

  return (
    <div className="column">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" onClick={onClickTitle}>
            <article className="notification is-danger">
              <p className="title is-family-monospace has-text-weight-bold">L💘VE DeFi</p>
            </article>
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" onClick={onClickHome}>
              Home
            </a>
            <a className="navbar-item" onClick={onClickTokenBridgeLinks}>
            TokenBridgeLinks
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
