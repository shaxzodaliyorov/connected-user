export interface Resume {
  social_links: SocialLinks
  _id: string
  user: string
  position: string
  photo: string
  full_name: string
  phone_number: string
  email: string
  date_of_birth: string
  gender: string
  current_visa: string
  languages: Language[]
  country: string
  city: string
  nationality: string
  employee_type: string
  working_experience: string
  expected_salary: string
  about_me: string
  education: Education[]
  experience: Experience[]
  skills: string[]
  views: number
  seen: number
  offers: number
  created_at: string
  updated_at: string
}

export interface SocialLinks {
  instagram: string
  kakao_talk: string
  portfolio: string
}

export interface Language {
  title: string
  level: string
  _id: string
}

export interface Education {
  major: string
  university: string
  category: string
  region: string
  admission_year: string
  graduation_year: string
  description: string
  _id: string
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
  _id: string
}
