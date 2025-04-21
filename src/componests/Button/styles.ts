import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  font-weight: 700;
  font-size: 14px;
  color: ${cores.vermelho};
  background-color: ${cores.bege};
  padding: 4px 84px;
  border: none;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  font-weight: 700;
  font-size: 14px;
  color: ${cores.bege};
  background-color: ${cores.vermelho};
  padding: 4px 6px;
  text-decoration: none;
`
