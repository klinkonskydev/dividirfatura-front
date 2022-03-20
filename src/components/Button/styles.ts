import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    padding: calc(${theme.spacings.medium} - 0.2rem) 0;
    background: ${theme.colors.yellow};
    border-radius: 8px;

    font-size: 1.4rem;
    font-weight: ${theme.fonts.weight.medium};

    margin-bottom: ${theme.spacings.medium};

    border: 0;
    outline: 0;

    &:disabled {
      cursor: not-allowed;
      background: ${darken(0.1, theme.colors.yellow)};
    }
  `}
`
