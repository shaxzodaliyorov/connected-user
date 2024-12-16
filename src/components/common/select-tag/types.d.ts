type Option = {
  label: string
  value: string
}

export interface SelectTagProps {
  className?: string
  options: Option[]
  onChange: (value: string) => void
  value: string
}
