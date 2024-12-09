export interface LoginResponse {
  success: boolean
  access_token: string
  refresh_token: string
}
export interface LoginRequest {
  email: string
  password: string
}

export interface SendOtpUserResponse {}
export interface SendOtpUserRequest {
  email: string
}

export interface VerifyOtpUserResponse {}
export interface VerifyOtpUserRequest {
  email: string
  otp: number
}

export interface UserRegisterResponse {}
export interface UserRegisterRequest {
  full_name: string
  phone_number: string
  email: string
  password: string
  company_name: string
}

export interface UserForgotPasswordResponse {}
export interface UserForgotPasswordRequest {
  email: string
  new_password: string
}

export interface SendOtpUpdateEmailResponse {}
export interface SendOtpUpdateEmailRequest {
  email: string
  otp: number
}
