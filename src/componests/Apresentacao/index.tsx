import { Imagem, Titulo, TituloCategoria, Titulos } from './styles'
import imagePerfil from '../../assets/images/ImagePerfil.png'

type Props = {
  type: 'Home' | 'Perfil'
}

const Apresentacao = ({ type }: Props) => {
  if (type === 'Perfil') {
    return (
      <>
        <Imagem style={{ backgroundImage: `url(${imagePerfil})` }}>
          <Titulos>
            <TituloCategoria>Italiana</TituloCategoria>
            <Titulo>La Dolce Vita Trattoria</Titulo>
          </Titulos>
        </Imagem>
      </>
    )
  }

  return null
}

export default Apresentacao
