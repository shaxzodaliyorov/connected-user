export interface UniversityResponse {
  _id: string
  en: string
  kr: string
}

interface PositionResponse {
  _id: string
  en: string
}

interface CountryResponse {
  _id: string
  name: string
  code: string
}

interface NationalityResponse {
  _id: string
  name: string
}

export interface GetAllUniversityResponse {
  success: true
  data: UniversityResponse[]
}

export interface GetAllUniversityRequest {
  search?: string
}

export interface GetPositionRequest {
  search?: string
}

export interface GetPositionResponse {
  success: boolean
  data: PositionResponse[]
}
export interface GetAllCountryRequest {
  search?: string
}

export interface GetAllNationalityRequest {
  search?: string
}
export interface GetAllCountryResponse {
  success: boolean
  data: CountryResponse[]
}
export interface GetAllNationalityResponse {
  success: boolean
  data: NationalityResponse[]
}
