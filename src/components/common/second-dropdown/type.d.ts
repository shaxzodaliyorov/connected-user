import React from 'react'

export type Option = {
  label: string
  value?: string
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
  className?: string
  icon: React.ReactNode
}
export type Props = {
  options: Option[]
  children?: React.ReactNode
}
