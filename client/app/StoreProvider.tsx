"use client"

import React, { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, createStore} from './lib/store/store' 
import { setAccount } from './lib/store/features/wallet/walletSlice'

const StoreProvider = ({children}:{children:ReactNode}) => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = createStore()
    // Add initial state
    // storeRef.current.dispatch(setAccount("nullAccount"))
  }
  return (
    <Provider store = {storeRef.current}>
        {children}
    </Provider>
  )
}

export default StoreProvider
