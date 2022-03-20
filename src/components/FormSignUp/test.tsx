import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/renderWithTheme'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the heading', () => {
    renderWithTheme(<FormSignUp />)

    expect(
      screen.getByRole('heading', { name: /crie uma conta para continuar/i })
    ).toBeInTheDocument()

    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/seu melhor email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText(/digite sua senha novamente/i)
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /criar conta/i })
    ).toBeInTheDocument()
  })
})
