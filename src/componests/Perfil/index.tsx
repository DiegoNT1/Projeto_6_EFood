import { Card, Descricao, Titulo } from './styles'
import Button from '../Button'

type Props = {
  title: string
  description: string
  image: string
}

const Perfil = ({ title, description, image }: Props) => (
  <>
    <Card>
      <img src={image} alt={title} />
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <Button type="button" title="Clique aqui para saber mais">
        Adicionar ao carrinho
      </Button>
    </Card>
  </>
)

export default Perfil
