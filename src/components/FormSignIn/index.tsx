import { Button } from 'components/Button/styles'
import Textbox from 'components/Textbox'
import Link from 'next/link'
import { useState } from 'react'
import * as S from './styles'

type SignInValuesType = {
  email: string
  password: string
}

const FormSignIn = () => {
  const [values, setValues] = useState<SignInValuesType>({
    email: '',
    password: ''
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    console.log(values)
  }

  const handleChange = (field: string, value: string) => {
    setValues((prevState) => ({ ...prevState, [field]: value }))
  }

  return (
    <S.FormWrapper onSubmit={handleSubmit}>
      <S.Heading>Faça login para continuar</S.Heading>

      <Textbox
        placeholder="Seu email"
        type="email"
        name="email"
        onInputChange={(value) => handleChange('email', value)}
      />
      <Textbox
        placeholder="Sua senha"
        type="password"
        name="password"
        onInputChange={(value) => handleChange('password', value)}
      />

      <S.LinkWrapper>
        <Link href="/">Esqueceu sua senha?</Link>
      </S.LinkWrapper>

      <Button type="submit">Entrar</Button>

      <S.SignUpWrapper>
        <span>Não tem uma conta?</span>
        <Link href="/sign-up">Cadastre-se agora</Link>
      </S.SignUpWrapper>
    </S.FormWrapper>
  )
}

export default FormSignIn
