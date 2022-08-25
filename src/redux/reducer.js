import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wallets: [
    // {
    //   walletId: "",
    //   address: "",
    //   privateKey: "",
    //   mnemonic: ""
    // }
  ],
  favorites: []
}

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  
  reducers: {
    generate: (state, action) => {
      state.wallets = [...state.wallets, action.payload]
    },

    reset: (state) => {
      state.wallets = []
      state.favorites = []
    },

    addToFavories: (state, action) => {
      const {walletId} = action
      let favWallet = null;

      state.favorites.forEach(wallet => {
        if(wallet.walletId === walletId) return
        favWallet = wallet
      });

      state.favorites.push(favWallet)
    }
  },
})

export const { generate, reset, addToFavories } = walletSlice.actions

export default walletSlice.reducer