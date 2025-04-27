import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  font-weight: 700;
  font-size: 14px;
  color: ${colors.red};
  background-color: ${colors.beige};
  padding: 4px 84px;
  border: none;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  font-weight: 700;
  font-size: 14px;
  color: ${colors.beige};
  background-color: ${colors.red};
  padding: 4px 6px;
  text-decoration: none;
`
