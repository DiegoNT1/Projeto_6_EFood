import { Imagem, Titulo, TituloCategoria, Infos } from './styles'
import { useParams } from 'react-router-dom'
import { useGetFeaturedPerfilQuery } from '../../services/api'

type Hero = {
  titulo: string
  tipo: string
  capa: string
}

const Hero = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetFeaturedPerfilQuery(id!)

  if (!restaurante) {
    return <h4>carregando</h4>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <Infos>
        <TituloCategoria>{restaurante.tipo}</TituloCategoria>
        <Titulo>{restaurante.titulo}</Titulo>
      </Infos>
    </Imagem>
  )
}

export default Hero
