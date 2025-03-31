import MoldelPerfil from '../../models/Perfil'
import Perfil from '../Perfil'
import { Container, List } from './styles'

export type Props = {
  perfilProp: MoldelPerfil[]
}

const PerfilProducts = ({ perfilProp }: Props) => (
  <Container>
    <List>
      {perfilProp.map((perfilProp) => (
        <Perfil
          key={perfilProp.id}
          title={perfilProp.title}
          description={perfilProp.description}
          image={perfilProp.image}
        />
      ))}
    </List>
  </Container>
)

export default PerfilProducts
