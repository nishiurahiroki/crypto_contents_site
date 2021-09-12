import { createSlice } from '@reduxjs/toolkit'

import { Network } from '../types/Network'

import { RootState } from '../store'

const bsc : Network = {
  name : 'bsc'
}
const polygon : Network = {
  name : 'polygon'
}
const ethereum : Network = {
  name : 'ethereum'
}
const initialNetworks = [
  bsc,
  polygon,
  ethereum
]


export interface NetworkSelectorState {
  value : Network | undefined,
  networks : Network[]
}

const initialState : NetworkSelectorState = {
  value : bsc,
  networks : initialNetworks
}


export const networkSelectorSlice = createSlice({
  name : 'networkSelector',
  initialState,
  reducers : {
    changeNetwork: (state, action) => {
      const selectedNetwork = initialNetworks.find(network => network.name === action.payload)
      state.value = selectedNetwork
    }
  }
})


export const { changeNetwork } = networkSelectorSlice.actions
export const selectedNetwork = (state : RootState) => state.networkSelector.value
export const networks = (state : RootState) => state.networkSelector.networks

export default networkSelectorSlice.reducer
