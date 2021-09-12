import { createSlice } from '@reduxjs/toolkit'

import { Network } from '../types/Network'

import { RootState } from '../store'

import NetworkRepository, { bsc } from '../repositories/NetworkRepository'


export interface NetworkSelectorState {
  value : Network | undefined,
  networks : Network[]
}

// TODO sliceの中でfetchAllするのはあんまり良くない気がする
const initialNetworks = NetworkRepository.fetchAll()
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
