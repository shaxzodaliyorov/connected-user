import React, {ReactElement} from 'react'

export interface Props {
  logo: string
  id: string
  job_title: string
  company?: string
  salary_min: number
  salary_max: number
  location: string
  nationality?: string
  visa: string[]
  type_of_employment: string[]
  created_at: string
}
