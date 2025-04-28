import { useGetFeaturedPerfilQuery } from '../../services/api'
import PerfilProducts from '../../componests/ProfileProducts'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante, isLoading } = useGetFeaturedPerfilQuery(id ?? '')

  if (isLoading) {
    return <PerfilProducts perfilProp={[]} isLoading={true} />
  }

  if (restaurante) {
    return (
      <PerfilProducts perfilProp={restaurante.cardapio} isLoading={false} />
    )
  }

  return <h4>Erro ao carregar</h4>
}

export default Perfil
