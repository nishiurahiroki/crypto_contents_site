import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import networkSelectorSlice from './slices/networkSelectorSlice'


export const store = configureStore({
  reducer : {
    networkSelector : networkSelectorSlice
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
