import { TokenBridgeApp } from '../types/TokenBridgeApp'

import {
  bsc,
  polygon,
  ethereum
} from '../repositories/NetworkRepository'

const links : TokenBridgeApp[] = [
  {
    name : 'AnySwap',
    supportNetworks : [
      bsc,
      polygon,
      ethereum
    ],
    url : 'https://stable.anyswap.exchange/#/swap',
    swapFee : 0.1
  },
  {
    name : 'Evodefi',
    supportNetworks : [
      bsc,
      polygon,
      ethereum
    ],
    url : 'https://bridge.evodefi.com/?token=USDC',
    swapFee : 0.5
  }
]


export default class TokenBridgeAppRepository {
  static fetchAll() {
    return links
  }
}
