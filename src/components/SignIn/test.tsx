import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/renderWithTheme'

import SignIn from '.'

jest.mock('components/Textbox', () => ({
  __esModule: true,
  default: () => <div data-testid="mock textbox" />
}))

describe('<SignIn />', () => {
  it('should render correctly', () => {
    renderWithTheme(<SignIn />)
    expect(
      screen.getByRole('heading', { name: /faça login para continuar/i })
    ).toBeInTheDocument()
    expect(screen.getAllByTestId(/mock textbox/i)).toHaveLength(2)
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(2)
    expect(screen.getByText(/não tem uma conta?/i)).toBeInTheDocument()
  })
})
