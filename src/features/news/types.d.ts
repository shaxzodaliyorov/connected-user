export interface VisaNewsData {
  _id: string
  title: string
  desc: string
  images: string[]
  registrant: string
  status: string
  created_at: string
  updated_at: string
}

export interface GetAllVisaNewsResponse {
  success: boolean
  page_count: number
  current_page: number
  next_page: number
  after_filtering_count: number
  data: VisaNewsData[]
}
export interface GetAllVisaNewsRequest {
  search?: string
  page?: number
  per_page?: number
}

export interface GetVisaNewsResponse {
  success: true
  data: VisaNewsData
}
