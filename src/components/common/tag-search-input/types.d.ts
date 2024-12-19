import {InputProps} from '../input/types'

type Suggestions = {
  label: string
  value: string
}
export interface TagInputProps {
  value: string
  onChange: (newValue: string) => void
  loading?: boolean
  inputProps?: InputProps
  suggestions?: Suggestions[]
}
