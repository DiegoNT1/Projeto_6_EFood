import { Container, List } from './styles'
import Hero from '../Hero'
import Perfil from '../Perfil'
import { Cardapio } from '../../pages/Perfil'

type Props = {
  perfilProp: Cardapio[]
}

const PerfilProducts = ({ perfilProp }: Props) => (
  <>
    <Hero />
    <Container>
      <List>
        {perfilProp.map((prato) => (
          <li key={prato.id}>
            <Perfil
              title={prato.nome}
              description={prato.descricao}
              porcao={prato.porcao}
              image={prato.foto}
              preco={prato.preco}
              id={prato.id}
            />
          </li>
        ))}
      </List>
    </Container>
  </>
)

export default PerfilProducts
