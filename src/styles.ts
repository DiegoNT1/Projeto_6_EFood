import { createGlobalStyle } from 'styled-components'

export const colors = {
  beige: '#FFEBD9',
  lightBeige: '#FFF8F2',
  red: '#E66767',
  white: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

  body {
  background-color: ${colors.lightBeige};
  color: ${colors.red};
}
`
