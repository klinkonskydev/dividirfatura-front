import { screen, waitFor } from '@testing-library/react'
import renderWithTheme from 'utils/renderWithTheme'
import userEvent from '@testing-library/user-event'

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

  it('should type in input', async () => {
    const onInputChange = jest.fn()
    renderWithTheme(<Textbox onInputChange={onInputChange} />)

    const input = screen.getByRole('textbox')
    const text = 'test klinkonsky'

    userEvent.type(input, text)
    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })

    expect(onInputChange).toHaveBeenCalledWith(text)
  })
})
