import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  color: ${colors.beige};
  background-color: ${colors.red};
  padding: 8px;

  img {
    width: 304px;
    height: 168px;
  }
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;

  &.visivel {
    display: flex;
  }
`
export const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.red};
  max-width: 1024px;
  max-height: 344px;
  padding: 32px;
  position: relative;

  img {
    width: 280px;
    height: 280px;
  }
`
export const Close = styled.img`
  max-width: 16px;
  max-height: 16px;
  margin-top: -16px;
  margin-right: -16px;
  cursor: pointer;
`

export const ModalInfos = styled.div`
  color: ${colors.white};
  margin-left: 24px;

  h4 {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  Button {
    padding: 4px 8px;
  }
`
