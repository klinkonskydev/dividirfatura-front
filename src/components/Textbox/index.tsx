import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextboxProps = {
  onInputChange?: (value: string) => void
  initialValue?: string
} & InputHTMLAttributes<HTMLInputElement>

const Textbox = ({
  initialValue = '',
  onInputChange,
  ...rest
}: TextboxProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return <S.Input {...rest} onChange={onChange} value={value} />
}

export default Textbox
