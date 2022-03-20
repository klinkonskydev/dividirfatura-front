import { Button } from 'components/Button/styles'
import Textbox from 'components/Textbox'
import Link from 'next/link'
import * as S from './styles'

const SignIn = () => (
  <S.FormWrapper>
    <S.Heading>Faça login para continuar</S.Heading>

    <Textbox placeholder="Seu email" type="email" />
    <Textbox placeholder="Sua senha" type="password" />

    <S.LinkWrapper>
      <Link href="/">Esqueceu sua senha?</Link>
    </S.LinkWrapper>

    <Button>Entrar</Button>

    <S.SignUpWrapper>
      <span>Não tem uma conta?</span>
      <Link href="/sign-up">Cadastre-se agora</Link>
    </S.SignUpWrapper>
  </S.FormWrapper>
)

export default SignIn
