import React from 'react'

export interface Option {
  label: string
  value: string | number
}

export interface SelectProps {
  label?: string
  value: string | number
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  options: Option[]
  className?: string
  disabled?: boolean
  errorMessage?: string
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  placeholder?: string
  wrapperClassName?: string
}
