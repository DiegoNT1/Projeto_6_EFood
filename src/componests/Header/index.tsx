import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  HeaderBar,
  Logo,
  Texto,
  HeaderBarPerfil,
  LinkIten,
  LogoPerfil,
  CartButton
} from './styles'
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
      <HeaderBar>
        <Link to="/">
          <Logo src={logo} alt="EFOOD" />
        </Link>
        <Texto>Viva experiências gastronômicas no conforto da sua casa</Texto>
      </HeaderBar>
    )
  }
  return (
    <HeaderBarPerfil>
      <div>
        <LinkIten to="/">Restaurantes</LinkIten>
        <Link to="/">
          <LogoPerfil src={logo} alt="EFOOD" />
        </Link>
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </div>
    </HeaderBarPerfil>
  )
}

export default Header
