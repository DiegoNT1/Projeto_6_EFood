import { Restaurante } from '../../pages/Home'
import Restaurantes from '../Restaurantes'
import { Container, List } from './styles'

type Props = {
  restaurantesProp: Restaurante[]
}

const RestaurantesList = ({ restaurantesProp }: Props) => (
  <Container>
    <List>
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
    </List>
  </Container>
)

export default RestaurantesList
