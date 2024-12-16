export interface Job {
  _id: string
  company: {
    _id: string
    company_name: string
    logo: string
  }
  job_title: string
  categories: string[]
  type_of_employment: string[]
  workday: number
  working_hours_start: string
  working_hours_end: string
  working_hours_are_negotiable: boolean
  salary_min: number
  salary_max: number
  korean_language_skill: string
  required_skills: string[]
  visa: string[]
  gender: string
  nationality: string
  age: string
  deadline: string
  description: string
  responsibilities: string
  who_you_are: string
  nice_to_haves: string
  benefit: string[]
  images: string[]
  status: string
  view_count: number
  created_at: Date
  updated_at: Date
  working_place: string
  location: string
}

export interface Company {
  _id: string
  company_name: string
  phone_number: string
  email: string
  tech_stack: any[]
  role: string
  status: string
  created_at: string
  updated_at: string
  logo: string
  description?: string
  images: string[]
  location: string
}

export interface PublicJob {
  _id: string
  company: Company
  job_title: string
  categories: string[]
  type_of_employment: string[]
  workday: number
  working_hours_start: string
  working_hours_end: string
  working_hours_are_negotiable: boolean
  salary_min: number
  salary_max: number
  korean_language_skill: string
  required_skills: string[]
  visa: string[]
  gender: string
  nationality: string
  age: string
  deadline: string
  description: string
  responsibilities: string
  who_you_are: string
  nice_to_haves: string
  benefit: string[]
  images: string[]
  status: string
  view_count: number
  created_at: string
  updated_at: string
  working_place: string
  qualification: string[]
  recruitment_process: string
  location: string
}
