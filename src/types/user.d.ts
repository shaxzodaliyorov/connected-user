import {ROLE} from '@/enum/role'

export interface User {
  _id: string
  full_name: string
  phone_number: string
  email: string
  role: ROLE
  status: string
  created_at: string
  updated_at: string
  profile: string
  profile_photo: string
  visa_help?: {
    is_attend_university: string
    is_violation: boolean
    kiip: string
    topik: string
    violation: number
  }
}
