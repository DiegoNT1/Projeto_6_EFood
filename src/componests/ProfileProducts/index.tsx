import * as S from './styles'
import Hero from '../Hero'
import Perfil from '../Profile'

type Props = {
  perfilProp: Cardapio[]
}

const PerfilProducts = ({ perfilProp }: Props) => (
  <>
    <Hero />
    <S.Container>
      <S.List>
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
      </S.List>
    </S.Container>
  </>
)

export default PerfilProducts
