import styled from 'styled-components'
import fundo1 from '../../assets/images/Vector.png'
import fundo2 from '../../assets/images/fundo.png'
import { Link } from 'react-router-dom'

export const HeaderBar = styled.header`
  background-image: url(${fundo1});
  background-size: cover;
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Logo = styled.img`
  padding-top: 64px;
`
export const Texto = styled.h2`
  font-size: 36px;
  font-weight: 900;
  padding-top: 136px;
  padding-bottom: 40px;
  max-width: 544px;
  text-align: center;
`
export const HeaderBarPerfil = styled.header`
  background-image: url(${fundo2});
  background-size: cover;
  width: 100%;
  height: 184px;

  div {
    max-width: 1204px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
`
export const LinkIten = styled(Link)`
  margin: 80px 176px;
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`
export const LogoPerfil = styled.img`
  padding-top: 64px;
  padding-bottom: 64px;
`
