import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${colors.red};
  z-index: 1;
  padding: 32px 8px 0px 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .empty-text {
    font-size: 16px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`
export const Price = styled.div`
  color: ${colors.beige};
  font-weight: 700;
  font-size: 14;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 40px;
`

export const CartItem = styled.li`
  background-color: ${colors.beige};
  height: 98px;
  margin-bottom: 16px;
  position: relative;
`

export const CartList = styled.div`
  display: flex;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 8px 0px 8px 8px;
  }

  div {
    margin: 8px 0px 8px 8px;
  }

  h3 {
    margin-bottom: 16px;
  }

  button {
    background-image: url(${lixeira});
    height: 16px;
    width: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
