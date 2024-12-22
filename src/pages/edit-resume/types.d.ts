export interface AddResumeFormValues {
  position: string & File
  photo: any
  full_name: string
  phone_number: string
  email: string
  date_of_birth: string
  gender: string
  current_visa: string
  languages: Language[] | any[]
  country: string
  city: string
  nationality: string
  employee_type: string
  working_experience: string
  expected_salary: string
  social_links: SocialLinks
  about_me: string
  education: Education[]
  experience: Experience[]
  skills: string[]
}

export interface Language {
  value: any
  title: string
  level: string
  id: number
}

export interface SocialLinks {
  instagram: string
  kakao_talk: string
  portfolio: string
}

export interface Education {
  major: string
  university: string
  category: string
  region: string
  admission_year: string
  graduation_year: string
  description: string
}

export interface Experience {
  title: string
  company: string
  website: string
  location: string
  employment_type: string
  joining_year: string
  retirement_year: string
  still_working: boolean
  description: string
  joining_year: string
  retirement_year: string
}
