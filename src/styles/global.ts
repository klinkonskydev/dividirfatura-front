import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: ${theme.fonts.family};
    }

    html {
      font-size: 62.5%;
      background: ${theme.colors.xxwhite};
    }

    html,
    body,
    #__next {
      min-height: 100%;
    }

    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `}
`

export default GlobalStyles
