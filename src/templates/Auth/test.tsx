import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/renderWithTheme'

import AuthTemplate from '.'

describe('</Textbox>', () => {
  it('should render the object with image', () => {
    renderWithTheme(
      <AuthTemplate>
        <div data-testid="children" />
      </AuthTemplate>
    )

    expect(document.querySelector('object')).toBeInTheDocument()
    expect(document.querySelector('object')).toHaveAttribute(
      'data',
      '/img/invoices.svg'
    )
  })

  it('should render the children', () => {
    renderWithTheme(
      <AuthTemplate>
        <div data-testid="children" />
      </AuthTemplate>
    )

    expect(screen.getByTestId(/children/i)).toBeInTheDocument()
  })
})
