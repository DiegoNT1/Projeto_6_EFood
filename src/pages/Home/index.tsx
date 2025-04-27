import RestaurantesList from '../../componests/RestaurantsList'
import { useGetFeaturedRestauranteQuery } from '../../services/api'

const Home = () => {
  const { data: restaurante } = useGetFeaturedRestauranteQuery()

  if (restaurante) {
    return <RestaurantesList restaurantesProp={restaurante} />
  }
  return <h4>Carregando</h4>
}

export default Home
