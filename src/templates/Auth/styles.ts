import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.xxwhite};
    height: 100%;
  `}
`

export const ImageBlock = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 353px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: hidden;

    padding-top: ${theme.spacings.medium};
    background: ${theme.colors.yellow};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 380px;
    padding: 0 ${theme.spacings.large} ${theme.spacings.medium};

    margin: ${theme.spacings.xlarge} auto 0;
  `}
`

export const Image = styled.object`
  position: absolute;
  top: 90px;
  width: 390px;
`
