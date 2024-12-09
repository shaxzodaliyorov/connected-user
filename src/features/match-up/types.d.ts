export interface MatchUpData {
  job_id: string
  resume_id: string
  job_title: string
  company_name: string
  company_logo: string
  company_location: string
  type_of_employment: string[]
  categories: string[]
  resume_position: string
  percent: number
}

export interface GetAllMatchUpJobsResponse {
  success: boolean
  data: MatchUpData[]
}
export interface GetAllMatchUpJobsRequest {}
