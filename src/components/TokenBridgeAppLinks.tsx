import React from 'react'
import { useSelector } from 'react-redux'

import { linksSelector } from '../slices/tokenBridgeAppLinksSlice'

export function TokenBridgeAppLinks() {
  const links = useSelector(linksSelector)

  return (
    <div>
      <h3>Bridge App Links</h3>
      {
        links.map(link => (
          <div key={link.url} style={{ margin:'2 2 2 2' }}>
            <div>
              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
            </div>
            <div>
              swap fee <label style={{ fontFamily : 'sans-serif' }}>{link.swapFee}</label> %
            </div>
          </div>
        ))
      }
    </div>
  )
}
