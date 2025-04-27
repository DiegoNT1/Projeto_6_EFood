import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import cartReducer from './reducers/cart'
import checkoutReducer from './reducers/checkout'
import paymentReducer from './reducers/payment'
import orderReducer from './reducers/order'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer,
    payment: paymentReducer,
    order: orderReducer,

    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
