import { useState } from 'react'

import { Button } from 'components/Button/styles'
import Textbox from 'components/Textbox'
import Link from 'next/link'
import * as S from './styles'

type SignUpValues = {
  username: string
  email: string
  password: string
}

const FormSignUp = () => {
  const [values, setValues] = useState<SignUpValues>({
    username: '',
    email: '',
    password: ''
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log(values)
  }

  const handleChange = (field: string, value: string) =>
    setValues((prevState) => ({ ...prevState, [field]: value }))

  return (
    <S.FormWrapper onSubmit={handleSubmit}>
      <S.Heading>Crie uma conta para continuar</S.Heading>

      <Textbox
        placeholder="Username"
        type="username"
        name="username"
        onInputChange={(v) => handleChange('username', v)}
      />
      <Textbox
        placeholder="Seu melhor email"
        type="email"
        name="email"
        onInputChange={(v) => handleChange('email', v)}
      />
      <Textbox
        placeholder="Senha"
        type="password"
        name="password"
        onInputChange={(v) => handleChange('password', v)}
      />
      <Textbox
        placeholder="Digite sua senha novamente"
        type="confirm-password"
        name="confirm-password"
        onInputChange={(v) => handleChange('confirm-password', v)}
      />

      <Button>Criar conta</Button>

      <S.SignUpWrapper>
        <span>Já tem uma conta?</span>
        <Link href="/">Entre agora</Link>
      </S.SignUpWrapper>
    </S.FormWrapper>
  )
}

export default FormSignUp
