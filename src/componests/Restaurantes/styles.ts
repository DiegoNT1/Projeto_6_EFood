import styled from 'styled-components'
import { cores } from '../../styles'
import { StyledTag } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  position: relative;
  display: flex;
  flex-direction: column;

  ${StyledTag} {
    margin-right: 8px;
  }
`

export const DivDescricao = styled.div`
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: ${cores.vermelho};
  padding: 8px;

  div {
    display: flex;
    justify-content: space-between;
  }
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 16px;
  padding-bottom: 16px;
`

export const Pontuacao = styled.div`
  align-items: center;
  margin-bottom: 16px;

  p {
    font-size: 18px;
    font-weight: 700;
  }

  img {
    margin-left: 8px;
  }
`

export const PontuacaoTitulo = styled.h3`
  display: inline-block;
`

export const Descricao = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 20px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
