import Restaurantes from '../Restaurants'
import * as S from './styles'

type Props = {
  restaurantesProp: Restaurante[]
}

const RestaurantesList = ({ restaurantesProp }: Props) => (
  <S.Container>
    <S.List>
      {restaurantesProp.map((restaurante) => (
        <li key={restaurante.id}>
          <Restaurantes
            tipo={restaurante.tipo}
            title={restaurante.titulo}
            description={restaurante.descricao}
            image={restaurante.capa}
            pontuacao={restaurante.avaliacao}
            id={restaurante.id}
            destacado={restaurante.destacado}
          />
        </li>
      ))}
    </S.List>
  </S.Container>
)

export default RestaurantesList
