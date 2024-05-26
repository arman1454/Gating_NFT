import { configureStore } from '@reduxjs/toolkit'
import walletReducer from './features/wallet/walletSlice'

export const createStore = ()=>{
  return configureStore({
    reducer: {
      wallet: walletReducer
    }
  })

}




// Infer the type of makeStore
export type AppStore = ReturnType<typeof createStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']