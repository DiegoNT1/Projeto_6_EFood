import { useGetFeaturedPerfilQuery } from '../../services/api'
import PerfilProducts from '../../componests/ProfileProducts'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetFeaturedPerfilQuery(id!)

  if (restaurante) {
    return <PerfilProducts perfilProp={restaurante.cardapio} />
  }

  return <h4>Carregando...</h4>
}

export default Perfil
