import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  display: block;
  color: ${colors.white};
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }
`
export const Infos = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  position: relative;
`

export const TitleCategory = styled.h3`
  font-weight: 100;
  font-size: 32px;
  margin-bottom: 152px;
  padding-top: 24px;
`

export const Title = styled.h2`
  font-weight: 900;
  font-size: 32px;
`
