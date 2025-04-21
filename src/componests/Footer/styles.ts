import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.bege};
  height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Logo = styled.img`
  padding-top: 40px;
`
export const Social = styled.div`
  padding-top: 32px;
  padding-bottom: 80px;
`

export const SocialItens = styled.img`
  padding-right: 8px;
`

export const Texto = styled.p`
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 40px;
  max-width: 480px;
  text-align: center;
`
