import Image from 'next/image'
import * as S from './styles'

type AuthTemplateProps = {
  children: React.ReactNode
}

export default function AuthTemplate({ children }: AuthTemplateProps) {
  return (
    <S.Wrapper>
      <S.ImageBlock>
        <Image src="/img/logo.svg" width="156px" height="20px" />
        <S.Image type="image/svg+xml" data="/img/invoices.svg">
          svg-animation
        </S.Image>
      </S.ImageBlock>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}
