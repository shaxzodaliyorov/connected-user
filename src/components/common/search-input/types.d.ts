type Option = {
  label: string
  value: string
}

export type SearchInputProps = {
  label: string
  placeholder?: string
  className?: string
  label?: string
  required?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  name?: string
  errorMessage?: string
  wrapperClassName?: string
  startContent?: React.ReactNode
  labelClassName?: string
  endContent?: ReactNode
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement> & React.ChangeEvent<HTMLInputElement>) => void
  options: Option[]
  isSearching?: boolean
  leftIcon?: React.ReactNode
}
