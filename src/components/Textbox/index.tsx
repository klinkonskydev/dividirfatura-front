import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type TextboxProps = InputHTMLAttributes<HTMLInputElement>

const Textbox = ({ ...rest }) => <S.Input {...rest} />

export default Textbox
