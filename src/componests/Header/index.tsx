import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/images/logo.png'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

type Props = {
  type: 'Home' | 'Perfil'
}

const Header = ({ type }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  if (type === 'Home') {
    return (
      <S.HeaderBar>
        <Link title="Clique aqui para voltar para o inicio" to="/">
          <S.Logo src={logo} alt="EFOOD" />
        </Link>
        <S.Text>Viva experiências gastronômicas no conforto da sua casa</S.Text>
      </S.HeaderBar>
    )
  }
  return (
    <S.HeaderBarPerfil>
      <div>
        <S.LinkIten title="Clique aqui para voltar para o inicio" to="/">
          Restaurantes
        </S.LinkIten>
        <Link title="Clique aqui para voltar para o inicio" to="/">
          <S.LogoPerfil src={logo} alt="EFOOD" />
        </Link>
        <S.CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </S.CartButton>
      </div>
    </S.HeaderBarPerfil>
  )
}

export default Header
