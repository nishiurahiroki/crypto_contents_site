import React from 'react'
import { useSelector } from 'react-redux'

import { linksSelector } from '../slices/tokenBridgeAppLinksSlice'

export function TokenBridgeAppLinks() {
  const links = useSelector(linksSelector)

  return (
    <div className="column">
      <div className="columns">
        <div className="column">
          <strong>Bridge token service links</strong>
        </div>
      </div>

      {
        links.map(link => (
          <div key={link.url} className="columns">
            <div className="column">
              <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={`https://www.google.com/s2/favicons?domain=${link.url}`} alt="Image"/>
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong className="is-size-4">
                          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                        </strong>
                        <br/>
                        <small>swap fee　</small>
                        <small>
                          <strong>{link.swapFee} %</strong>
                        </small>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
