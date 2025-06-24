import { useDispatch } from 'react-redux'
import { useState } from 'react'
import * as S from './styles'
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
        <S.Card>
          <img src={image} alt={title} />
          <S.Titulo>{title}</S.Titulo>
          <S.Descricao>{getDescricao(description)}</S.Descricao>
          <Button
            onClick={() => setModalAberto(true)}
            type="button"
            title="Clique aqui para adicionar ao carrinho"
          >
            Adicionar ao carrinho
          </Button>
        </S.Card>
      </div>

      <S.Modal className={modalAberto ? 'visivel' : ''}>
        <S.ModalContent>
          <img src={image} alt={title} />
          <S.ModalInfos>
            <h4>{title}</h4>
            <p>{description}</p>
            <p>Serve: {porcao}</p>
            <Button
              onClick={addToCart}
              type="button"
              title="Clique aqui para adicionar ao carrinho"
            >
              {`Adicionar ao carrinho - R$ ${preco.toFixed(2)}`}
            </Button>
          </S.ModalInfos>
          <S.Close
            onClick={() => setModalAberto(false)}
            src={close}
            alt="fechar"
          />
        </S.ModalContent>
      </S.Modal>
    </>
  )
}

export default Perfil
