import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/renderWithTheme'

import Textbox from '.'

describe('<Textbox />', () => {
  it('should render the textbox', () => {
    renderWithTheme(<Textbox />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render input with placeholder text', () => {
    renderWithTheme(<Textbox placeholder="Seu email" />)

    expect(screen.getByPlaceholderText(/seu email/i)).toBeInTheDocument()
  })

  it('shout contains common styles', () => {
    renderWithTheme(<Textbox />)

    expect(screen.getByRole('textbox')).toHaveStyle({
      border: '1px solid #F0F0F0',
      padding: '1.6rem'
    })
  })
})
