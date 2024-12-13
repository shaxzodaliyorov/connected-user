export interface InputProps {
  label?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
  className?: string
  type?: 'text' | 'password' | 'email' | 'number' | 'tel'
  disabled?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  errorMessage?: string
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  placeholder?: string
  inputSizeClassName?: string
  wrapperClassName?: string
}
