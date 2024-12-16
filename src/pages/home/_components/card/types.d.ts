export interface CardProps {
  company: {
    _id: string
    company_name: string
    logo: string
  }
  title: string
  company?: string
  salary_min: number
  salary_max: number
  location: string
  type_of_employment: string[]
  description?: string
  onClick?: () => void
  onSaveClick?: () => void
  className?: string
  id?: string
  titleOnClick?: () => void
}
