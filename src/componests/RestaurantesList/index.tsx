import ModelRestaurante from '../../models/Restaurante'
import Restaurantes from '../Restaurantes'
import { Container, List } from './styles'

export type Props = {
  restaurantesProp: ModelRestaurante[]
}

const RestaurantesList = ({ restaurantesProp }: Props) => (
  <Container>
    <List>
      {restaurantesProp.map((restaurantesProp) => (
        <Restaurantes
          key={restaurantesProp.id}
          title={restaurantesProp.title}
          infos={restaurantesProp.infos}
          description={restaurantesProp.description}
          image={restaurantesProp.image}
          pontuacao={restaurantesProp.pontuacao}
          buttomTo={restaurantesProp.buttomTo}
        />
      ))}
    </List>
  </Container>
)

export default RestaurantesList
