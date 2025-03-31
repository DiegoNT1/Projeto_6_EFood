import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  color: ${cores.bege};
  background-color: ${cores.vermelho};
  padding: 8px;
`

export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  padding: 8px 0;
`

export const Descricao = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`
