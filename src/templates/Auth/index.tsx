import * as S from './styles'

type AuthTemplateProps = {
  children: React.ReactNode
}

export default function AuthTemplate({ children }: AuthTemplateProps) {
  return (
    <S.Wrapper>
      <S.ImageBlock>
        <S.Title>
          dividirfatura<span>.</span>
        </S.Title>
        <S.Image type="image/svg+xml" data="/img/invoices.svg">
          svg-animation
        </S.Image>
      </S.ImageBlock>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}
