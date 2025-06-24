import { Link } from 'react-router-dom'
import {
  HeaderBar,
  Logo,
  Texto,
  HeaderBarPerfil,
  LinkIten,
  LogoPerfil
} from './styles'
import logo from '../../assets/images/logo.png'

type Props = {
  type: 'Home' | 'Perfil'
}

const Header = ({ type }: Props) => {
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
        <LinkIten to="/">0 produto(s) no carrinho</LinkIten>
      </div>
    </HeaderBarPerfil>
  )
}

export default Header
