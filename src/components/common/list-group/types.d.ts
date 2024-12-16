type Option = {
  label: string
  value: string
}

export interface ListGroupProps {
  className?: string
  options: Option[]
  onChange: (value: string) => void
  value: string
}
