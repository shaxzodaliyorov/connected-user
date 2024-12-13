export interface CardProps {
  image: string
  title: string
  company?: string
  description?: string
  onClick?: () => void
  onSaveClick?: () => void
  className?: string
  id?: string
  titleOnClick?: () => void
}
