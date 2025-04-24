import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'
import { Cardapio } from '../pages/Perfil'

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
    })
  })
})

export const { useGetFeaturedRestauranteQuery, useGetFeaturedPerfilQuery } = api

export default api
