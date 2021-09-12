import { createSlice } from '@reduxjs/toolkit'

import { TokenBridgeApp } from '../types/TokenBridgeApp'

import { RootState } from '../store'

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
    url : 'https://stable.anyswap.exchange/#/swap'
  },
  {
    name : 'Evodefi',
    supportNetworks : [
      bsc,
      polygon,
      ethereum
    ],
    url : 'https://bridge.evodefi.com/?token=USDC'
  }
]

interface TokenBridgeAppLinksState {
  links : TokenBridgeApp[]
}

const initialState : TokenBridgeAppLinksState = {
  links
}


export const tokenBridgeAppLinksSlice = createSlice({
  name : 'tokenBridgeAppLinks',
  initialState,
  reducers : {}
})


export const linksSelector = (state : RootState) => state.tokenBridgeAppLinks.links
export default tokenBridgeAppLinksSlice.reducer
