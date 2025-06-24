import * as S from './styles'
import { useParams } from 'react-router-dom'
import { useGetFeaturedPerfilQuery } from '../../services/api'

type Hero = {
  titulo: string
  tipo: string
  capa: string
}

const Hero = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetFeaturedPerfilQuery(id ?? '')

  if (!restaurante) {
    return <h4>carregando</h4>
  }

  return (
    <S.Image style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <S.Infos>
        <S.TitleCategory>{restaurante.tipo}</S.TitleCategory>
        <S.Title>{restaurante.titulo}</S.Title>
      </S.Infos>
    </S.Image>
  )
}

export default Hero
