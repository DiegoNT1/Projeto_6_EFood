import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const StyledTag = styled.div<Props>`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  padding: 6px 4px;
  font-weight: 700px;
  font-size: 12px;
  display: inline-block;
`
