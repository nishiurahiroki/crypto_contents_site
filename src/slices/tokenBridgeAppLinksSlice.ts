import { createSlice } from '@reduxjs/toolkit'

import { TokenBridgeApp } from '../types/TokenBridgeApp'

import TokenBridgeAppRepository from '../repositories/TokenBridgeAppRepository'

import { RootState } from '../store'


const links : TokenBridgeApp[] = TokenBridgeAppRepository.fetchAll()

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
