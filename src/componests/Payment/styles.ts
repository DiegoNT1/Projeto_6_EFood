import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
`
export const PaymentContainer = styled.form`
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
  background-color: ${colors.beige};
  z-index: 1;
  padding: 32px 8px 0px 8px;
  max-width: 360px;
  width: 100%;
  background-color: ${colors.red};
  color: ${colors.beige};
  font-weight: 700px;
  font-size: 14px;

  small {
    margin-bottom: 16px;
    display: block;
  }

  h3 {
    margin-bottom: 16px;
    font-weight: 700px;
    font-size: 16px;
  }

  label {
    font-size: 14px;
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    border: none;
    padding: 8px;
    margin-bottom: 8px;
  }

  button {
    height: 24px;
    width: 100%;
    white-space: nowrap;
    margin-bottom: 8px;
  }

  .spacer {
    display: block;
    height: 22px;
  }

  .confirmarcao {
    Button {
      margin-top: 28px;
    }
  }
`

export const Div = styled.div`
  display: flex;
  gap: 34px;
`

export const Buttons = styled.div`
  margin-top: 24px;
`
