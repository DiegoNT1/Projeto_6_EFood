import { createSlice } from '@reduxjs/toolkit'

type paymentState = {
  items: Cardapio[]
  isOpen: boolean
}

const initialState: paymentState = {
  items: [],
  isOpen: false
}

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { open, close } = paymentSlice.actions
export default paymentSlice.reducer
