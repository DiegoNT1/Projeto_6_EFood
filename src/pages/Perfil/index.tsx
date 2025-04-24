import { useGetFeaturedPerfilQuery } from '../../services/api'
import PerfilProducts from '../../componests/PerfilProducts'
import { useParams } from 'react-router-dom'

export type Cardapio = {
  cardapio: Cardapio[]
  tipo: string
  titulo: string
  capa: string
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetFeaturedPerfilQuery(id!)

  if (restaurante) {
    return <PerfilProducts perfilProp={restaurante.cardapio} />
  }

  return <h4>Carregando...</h4>
}

export default Perfil
