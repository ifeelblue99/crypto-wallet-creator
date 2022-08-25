import { configureStore } from '@reduxjs/toolkit'
import walletReducer from "./reducer.js"

export default configureStore({
  reducer: {
    wallet: walletReducer
  },
})