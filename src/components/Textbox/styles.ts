import styled, { css } from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => css`
    border: 0;
    outline: 0;

    width: 100%;

    border: 1px solid ${theme.colors.xwhite};
    border-radius: 6px;

    font-size: 1.6rem;
    font-weight: ${theme.fonts.weight.small};
    font-family: ${theme.fonts.family};

    background-color: ${theme.colors.white};

    padding: ${theme.spacings.medium};

    &::placeholder {
      color: ${theme.colors.xxgray};
    }

    &:active,
    &:focus {
      box-shadow: 2px 2px 5px 1px ${theme.colors.xwhite};
    }
  `}
`
