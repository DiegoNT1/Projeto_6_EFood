import * as S from './styles'
import Button from '../Button'
import Tag from '../Tag'
import estrela from '../../assets/images/estrela.png'

type Props = {
  id: number
  title: string
  description: string
  pontuacao: number
  image: string
  tipo: string
  destacado: boolean
}

const Restaurantes = ({
  id,
  title,
  description,
  image,
  pontuacao,
  destacado,
  tipo
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 250) + '...'
    }
    return descricao
  }

  return (
    <S.Card>
      <S.Tags>
        {destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{tipo}</Tag>
      </S.Tags>
      <img src={image} alt={title} />
      <S.DivDescricao>
        <div>
          <S.Titulo>{title}</S.Titulo>
          <S.Pontuacao>
            <p>{pontuacao}</p>
            <img src={estrela} alt="estrela" />
          </S.Pontuacao>
        </div>
        <S.Descricao>{getDescricao(description)}</S.Descricao>
        <div>
          <Button
            type="link"
            to={`/Perfil/${id}`}
            title="Clique aqui para saber mais"
          >
            Saiba mais
          </Button>
        </div>
      </S.DivDescricao>
    </S.Card>
  )
}

export default Restaurantes
