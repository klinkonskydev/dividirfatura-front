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

    <S.Button>Entrar</S.Button>

    <S.SignUpWrapper>
      <span>Não tem uma conta?</span>
      <Link href="/sign-up">Cadastre-se agora</Link>
    </S.SignUpWrapper>
  </S.FormWrapper>
)

export default SignIn
