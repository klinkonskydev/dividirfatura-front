import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/renderWithTheme'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render correctly', () => {
    renderWithTheme(<FormSignIn />)
    expect(
      screen.getByRole('heading', { name: /faça login para continuar/i })
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/seu email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/sua senha/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(2)
    expect(screen.getByText(/não tem uma conta?/i)).toBeInTheDocument()
  })
})
