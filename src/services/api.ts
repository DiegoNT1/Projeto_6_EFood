import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Products = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Products[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurante: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getFeaturedPerfil: builder.query<Cardapio, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeaturedRestauranteQuery,
  useGetFeaturedPerfilQuery,
  usePurchaseMutation
} = api

export default api
