type Option = {
  label: string
  value: string
  subLabel?: string
  point: number
}

export type Props = {
  options: Option[]
  value: {point: number; value: string}
  onChange: (value: {point: number; value: string}) => void
  labelClassName?: string
  contentClassName?: string
}
