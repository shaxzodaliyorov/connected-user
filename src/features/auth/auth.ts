import {
  LoginRequest,
  LoginResponse,
  SendOtpUserRequest,
  SendOtpUserResponse,
  UserForgotPasswordRequest,
  UserForgotPasswordResponse,
  UserRegisterRequest,
  UserRegisterResponse,
  VerifyOtpUserRequest,
  VerifyOtpUserResponse,
} from './types'
import {baseApi} from '..'
import {EndpointNameUserAuth, RTKTagNames} from '@/constants'

export const UserAuthExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    userLogin: build.mutation<LoginResponse, LoginRequest>({
      query: body => ({
        url: EndpointNameUserAuth.USER_LOGIN,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.USER],
    }),
    sendOtpUser: build.mutation<SendOtpUserResponse, SendOtpUserRequest>({
      query: body => ({
        url: EndpointNameUserAuth.USER_SIGNUP_SEND_OTP,
        method: 'POST',
        body,
      }),
    }),
    sendOtpUpdateEmail: build.mutation<SendOtpUserResponse, SendOtpUserRequest>({
      query: body => ({
        url: EndpointNameUserAuth.USER_UPDATE_EMAIL_SEND_OTP,
        method: 'POST',
        body,
      }),
    }),
    verifyOtpUser: build.mutation<VerifyOtpUserResponse, VerifyOtpUserRequest>({
      query: body => ({
        url: EndpointNameUserAuth.USER_SIGNUP_VERIFY_OTP,
        method: 'POST',
        body,
      }),
    }),
    userRegister: build.mutation<UserRegisterResponse, UserRegisterRequest>({
      query: body => ({
        url: EndpointNameUserAuth.USER_SIGNUP,
        method: 'POST',
        body,
      }),
    }),
    userForgotPasswordSendOtp: build.mutation<SendOtpUserResponse, Partial<SendOtpUserRequest>>({
      query: body => ({
        url: EndpointNameUserAuth.USER_FORGOT_PASSWORD_SEND_OTP,
        method: 'POST',
        body,
      }),
    }),
    userForgotPasswordVerifyOtp: build.mutation<VerifyOtpUserResponse, VerifyOtpUserRequest>({
      query: body => ({
        url: EndpointNameUserAuth.USER_FORGOT_PASSWORD_VERIFY_OTP,
        method: 'POST',
        body,
      }),
    }),
    userForgotPassword: build.mutation<UserForgotPasswordResponse, UserForgotPasswordRequest>({
      query: body => ({
        url: EndpointNameUserAuth.USER_FORGOT_PASSWORD,
        method: 'PUT',
        body,
      }),
    }),
  }),
})

export const {
  useUserLoginMutation,
  useSendOtpUserMutation,
  useVerifyOtpUserMutation,
  useUserRegisterMutation,
  useUserForgotPasswordSendOtpMutation,
  useUserForgotPasswordVerifyOtpMutation,
  useUserForgotPasswordMutation,
  useSendOtpUpdateEmailMutation,
} = UserAuthExtendedEndpoints
