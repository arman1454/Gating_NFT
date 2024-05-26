import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
export interface WalletState {
  account: string
}

// Define the initial state using that type
const initialState: WalletState = {
  account: ""
}

export const walletSlice = createSlice({
  name: 'wallet',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAccount:(state,action)=>{
        state.account = action.payload

    }
  }
})

export const { setAccount } = walletSlice.actions

export default walletSlice.reducer