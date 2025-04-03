import { useEffect, useState } from 'react'
import RestaurantesList from '../../componests/RestaurantesList'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Home = () => {
  const [restaurante, setRestaurante] = useState([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])

  return <RestaurantesList restaurantesProp={restaurante} />
}

export default Home
