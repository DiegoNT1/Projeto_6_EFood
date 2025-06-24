import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const StyledTag = styled.div<Props>`
  background-color: ${colors.red};
  color: ${colors.beige};
  padding: 6px 4px;
  font-weight: 700px;
  font-size: 12px;
  display: inline-block;
`
