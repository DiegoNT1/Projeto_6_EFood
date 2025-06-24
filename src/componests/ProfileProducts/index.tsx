import * as S from './styles'
import Hero from '../Hero'
import Perfil from '../Profile'
import Loader from '../Loader'

type Props = {
  perfilProp: Cardapio[]
  isLoading: boolean
}

const PerfilProducts = ({ perfilProp, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
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
}

export default PerfilProducts
