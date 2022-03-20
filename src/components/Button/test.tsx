import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/renderWithTheme'

import Button from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Button>Entrar</Button>)

    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
  })
})
