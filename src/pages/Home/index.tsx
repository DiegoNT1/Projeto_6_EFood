import RestaurantesList from '../../componests/RestaurantsList'
import { useGetFeaturedRestauranteQuery } from '../../services/api'

const Home = () => {
  const { data: restaurant, isLoading } = useGetFeaturedRestauranteQuery()

  if (isLoading) {
    return <RestaurantesList restaurantesProp={[]} isLoading={true} />
  }

  if (restaurant) {
    return <RestaurantesList restaurantesProp={restaurant} isLoading={false} />
  }

  return <h4>Erro ao carregar</h4>
}

export default Home
