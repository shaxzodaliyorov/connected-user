import {User} from '@/types'

export interface GetUserResponse {
  data: User
  status: boolean
}
export interface GetUserRequest {}

export interface GetUserProfileRequest {}

export interface UserProfile {
  _id: string
  full_name: string
  phone_number: string
  email: string
  role: string
  status: string
  created_at: string
  updated_at: string
  profile: Profile
  profile_photo: string
}

export interface Profile {
  social_links: SocialLinks
  _id: string
  date_of_birth: string
  gender: string
  current_visa: string
  languages: string[]
  open_my_resume: boolean
  start_date: boolean
  nationality: string
  employee_type: string
  working_experience: string
  expected_salary: string
  country: string
  city: string
  skills: string[]
  user: string
  about_me: string
}

export interface SocialLinks {
  instagram: string
  twitter: string
  portfolio: string
  telegram: string
  kakao_talk: string
  facebook: string
}

export interface GetUserProfileResponse {
  success: boolean
  data: UserProfile
}

export interface UpdateUserProfileResponse {}
export interface UpdateUserProfileRequest {
  profile_photo?: string
  full_name?: string
  phone_number?: string
  date_of_birth?: string
  gender?: string
  current_visa?: string
  languages?: string[]
  open_my_resume?: boolean
  start_date?: boolean
  nationality?: string
  employee_type?: string
  working_experience?: string
  employee_status?: string
  expected_salary?: string
  country?: string
  city?: string
  social_links?: Partial<SocialLinks>
  about_me?: string
  skills?: string[]
  current_residence?: string
  visa_issue_date?: string
  visa_final_date?: string
}

export interface UpdateUserEmailResponse {}
export interface UpdateUserEmailRequest {
  email: string
  otp: number
}

export interface UpdateUserPasswordResponse {
  success: boolean
}
export interface UpdateUserPasswordRequest {
  current_password: string
  new_password: string
}

export interface SetVisaHelpResponse {}
export interface SetVisaHelpRequest {
  is_attend_university: boolean
  kiip: string
  topik: string
  is_violation: boolean | string
  violation: number
}
