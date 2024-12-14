import {Job, PublicJob} from '@/types'

export interface GetAllJobsResponse {
  success: boolean
  page_count: number
  current_page: number
  next_page: number
  after_filtering_count: string
  data: Job[]
}
export interface GetAllJobsRequest {
  search?: string
  status?: 'part-time' | 'real-time' | 'new'
  category?: string
  gender?: string
  korean_language_skill?: string
  visa?: string
  nationality?: string
  page?: number
  per_page?: number
}

export interface GetFilterDataResponse {
  success: boolean
  data: string[]
}

export interface GetFilterDataRequest {
  type: 'category' | 'visa' | 'nationality'
}

export interface GetPublicJobResponse {
  success: boolean
  data: PublicJob
}
export interface GetPublicJobRequest {
  id: string
}

export interface SaveJobJobResponse {
  success: boolean
}

export interface SaveJobJobRequest {
  type: 'favorite' | 'unfavorite'
  id: string
}

export interface GetSaveJobIdsResponse {
  success: true
  data: string[]
}
export interface GetSaveJobIdsRequest {}

export interface ApplyJobResponse {}
export interface ApplyJobRequest {
  job_id: string
  resume_id: string
}

export interface SavedJobsData {
  job: {
    _id: string
    job_title: string
    categories: string[]
    type_of_employment: string[]
    location: string
  }
  company: {
    _id: string
    company_name: string
    logo: string
  }
}

export interface GetSavedJobsResponse {
  success: boolean
  data: SavedJobsData[]
}
export interface GetSavedJobsRequest {}

export interface ApplicationsResponse {
  _id: string
  job: ApplicationJob
  user: string
  resume: string
  status: string
  company: Company
  created_at: string
  updated_at: string
}

export interface ApplicationJob {
  _id: string
  job_title: string
  categories: string[]
  type_of_employment: string[]
  visa: string[]
  images: string[]
  status: string
}

export interface Company {
  _id: string
  company_name: string
  phone_number: string
  email: string
  status: string
  date_founded: string
  location: string
  website: string
  logo: string
}

export interface GetApplicationsResponse {
  success: boolean
  data: ApplicationsResponse[]
}
export interface GetApplicationsRequest {
  status?: 'applied' | 'accepted' | 'interview' | 'hired' | 'declined'
}

export interface GetTotalJobsAppliedResponse {
  success: boolean
  count: number
}

export interface GetTotalJobsAppliedRequest {}
