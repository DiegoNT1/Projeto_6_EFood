import {
  Card,
  Descricao,
  Titulo,
  DivDescricao,
  Pontuacao,
  Tags
} from './styles'
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
    <Card>
      <Tags>
        {destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{tipo}</Tag>
      </Tags>
      <img src={image} alt={title} />
      <DivDescricao>
        <div>
          <Titulo>{title}</Titulo>
          <Pontuacao>
            <p>{pontuacao}</p>
            <img src={estrela} alt="estrela" />
          </Pontuacao>
        </div>
        <Descricao>{getDescricao(description)}</Descricao>
        <div>
          <Button
            type="link"
            to={`/Perfil/${id}`}
            title="Clique aqui para saber mais"
          >
            Saiba mais
          </Button>
        </div>
      </DivDescricao>
    </Card>
  )
}

export default Restaurantes
