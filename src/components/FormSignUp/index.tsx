import { Button } from 'components/Button/styles'
import Textbox from 'components/Textbox'
import Link from 'next/link'
import * as S from './styles'

const FormSignUp = () => (
  <S.FormWrapper>
    <S.Heading>Crie uma conta para continuar</S.Heading>

    <Textbox placeholder="Username" type="email" />
    <Textbox placeholder="Seu melhor email" type="email" />
    <Textbox placeholder="Senha" type="password" />
    <Textbox placeholder="Digite sua senha novamente" type="password" />

    <Button>Criar conta</Button>

    <S.SignUpWrapper>
      <span>Já tem uma conta?</span>
      <Link href="/">Entre agora</Link>
    </S.SignUpWrapper>
  </S.FormWrapper>
)

export default FormSignUp
