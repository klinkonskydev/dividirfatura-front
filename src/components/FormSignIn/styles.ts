import styled, { css } from 'styled-components'
import * as TextboxStyles from 'components/Textbox/styles'

export const FormWrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${TextboxStyles.Input} {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-weight: ${theme.fonts.weight.medium};
    margin-bottom: ${theme.spacings.large};
  `}
`

export const LinkWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    margin-bottom: ${theme.spacings.medium};

    & a {
      font-size: 1.4rem;
      font-weight: ${theme.fonts.weight.small};
      color: ${theme.colors.xblack};
      text-decoration: none;
    }
  `}
`
export const SignUpWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 5px;

    & span,
    & a {
      font-size: 1.4rem;
    }

    & span {
      color: ${theme.colors.gray};
      font-weight: ${theme.fonts.weight.small};
    }

    & a {
      color: ${theme.colors.black};
      text-decoration: underline ${theme.colors.black};
      font-weight: ${theme.fonts.weight.semiBold};
    }
  `}
`
