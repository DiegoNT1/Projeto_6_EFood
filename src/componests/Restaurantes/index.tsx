import {
  Card,
  Descricao,
  Titulo,
  Infos,
  DivDescricao,
  Pontuacao
} from './styles'
import Button from '../Button'
import Tag from '../Tag'
import estrela from '../../assets/images/estrela.png'

type Props = {
  title: string
  infos: string[]
  description: string
  pontuacao: string
  buttomTo: string
  image: string
}

const Restaurantes = ({
  title,
  infos,
  description,
  image,
  buttomTo,
  pontuacao
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((infos) => (
        <Tag key={infos}>{infos}</Tag>
      ))}
    </Infos>
    <DivDescricao>
      <div>
        <Titulo>{title}</Titulo>
        <Pontuacao>
          <p>{pontuacao}</p>
          <img src={estrela} alt="estrela" />
        </Pontuacao>
      </div>
      <Descricao>{description}</Descricao>
      <div>
        <Button type="link" to={buttomTo} title="Clique aqui para saber mais">
          Saiba mais
        </Button>
      </div>
    </DivDescricao>
  </Card>
)

export default Restaurantes
