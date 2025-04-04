import RestaurantesList from '../../componests/RestaurantesList'
import { useGetFeaturedRestauranteQuery } from '../../services/api'

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
  const { data: restaurante } = useGetFeaturedRestauranteQuery()

  if (restaurante) {
    return <RestaurantesList restaurantesProp={restaurante} />
  }
  return <h4>Carregando</h4>
}

export default Home
