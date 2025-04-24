import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {
  Card,
  Descricao,
  Titulo,
  Close,
  Modal,
  ModalContent,
  ModalInfos
} from './styles'
import Button from '../Button'
import close from '../../assets/images/close.png'
import { add, open } from '../../store/reducers/cart'

type Props = {
  id: number
  title: string
  description: string
  image: string
  preco: number
  porcao: string
}

const Perfil = ({ title, description, image, preco, porcao, id }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)

  const getDescricao = (descricao?: string) => {
    if (!descricao) return 'Carregando'
    return descricao.length > 250 ? descricao.slice(0, 250) + '...' : descricao
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      add({
        titulo: title,
        descricao: description,
        foto: image,
        preco,
        porcao,
        cardapio: [],
        tipo: '',
        capa: '',
        id,
        nome: ''
      })
    )
    dispatch(open())
  }

  return (
    <>
      <div>
        <Card>
          <img src={image} alt={title} />
          <Titulo>{title}</Titulo>
          <Descricao>{getDescricao(description)}</Descricao>
          <Button
            onClick={() => setModalAberto(true)}
            type="button"
            title="Clique aqui para adicionar ao carrinho"
          >
            Adicionar ao carrinho
          </Button>
        </Card>
      </div>

      <Modal className={modalAberto ? 'visivel' : ''}>
        <ModalContent>
          <img src={image} alt={title} />
          <ModalInfos>
            <h4>{title}</h4>
            <p>{description}</p>
            <p>Serve: {porcao}</p>
            <Button
              onClick={addToCart}
              type="button"
              title="Clique aqui para adicionar ao carrinho"
            >
              {`Adicionar ao carrinho - ${preco}`}
            </Button>
          </ModalInfos>
          <Close
            onClick={() => setModalAberto(false)}
            src={close}
            alt="fechar"
          />
        </ModalContent>
      </Modal>
    </>
  )
}

export default Perfil
