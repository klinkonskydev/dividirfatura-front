import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.xxwhite};
  `}
`

export const ImageBlock = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 37rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: hidden;

    padding-top: ${theme.spacings.medium};
    background: ${theme.colors.yellow};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-height: ${theme.fonts.weight.medium};
    color: ${theme.colors.black};

    font-size: 2.7rem;
    margin-bottom: ${theme.spacings.large};

    & span {
      color: ${theme.colors.white};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 366px;

    margin: ${theme.spacings.xlarge} auto 0;
  `}
`

export const Image = styled.object`
  width: 95%;
`
