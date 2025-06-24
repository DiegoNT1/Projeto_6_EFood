import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type CheckoutData = {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: number
    complement: string
  }
}

const initialState: CheckoutData = {
  receiver: '',
  address: {
    description: '',
    city: '',
    zipCode: '',
    number: 0,
    complement: ''
  }
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    saveCheckoutData: (state, action: PayloadAction<CheckoutData>) => {
      return action.payload
    }
  }
})

export const { saveCheckoutData } = orderSlice.actions
export default orderSlice.reducer
