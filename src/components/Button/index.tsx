import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...rest }: ButtonProps) => (
  <S.Button {...rest}>{children}</S.Button>
)

export default Button
