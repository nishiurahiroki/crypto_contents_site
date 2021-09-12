import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import networkSelectorSlice from './slices/networkSelectorSlice'
import tokenBridgeAppLinksSlice from './slices/tokenBridgeAppLinksSlice'

export const store = configureStore({
  reducer : {
    networkSelector : networkSelectorSlice,
    tokenBridgeAppLinks : tokenBridgeAppLinksSlice,
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
