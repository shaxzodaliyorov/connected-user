import {EndpointNameUser, RTKTagNames} from '@/constants'
import {baseApi} from '..'
import {
  GetUserRequest,
  GetUserResponse,
  SetVisaHelpRequest,
  SetVisaHelpResponse,
  UpdateUserEmailRequest,
  UpdateUserEmailResponse,
  UpdateUserPasswordRequest,
  UpdateUserPasswordResponse,
  UpdateUserProfileRequest,
  UpdateUserProfileResponse,
} from './types'

export const UserExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getUser: build.query<GetUserResponse, GetUserRequest>({
      query: () => ({
        url: EndpointNameUser.USER_ME,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.USER],
    }),
    updateUserProfile: build.mutation<UpdateUserProfileResponse, UpdateUserProfileRequest>({
      query: body => ({
        url: EndpointNameUser.UPDATE_USER_PROFILE,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.USER],
    }),
    updateUserEmail: build.mutation<UpdateUserEmailResponse, UpdateUserEmailRequest>({
      query: body => ({
        url: EndpointNameUser.UPDATE_USER_EMAIL,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.USER],
    }),
    updateUserPassword: build.mutation<UpdateUserPasswordResponse, UpdateUserPasswordRequest>({
      query: body => ({
        url: EndpointNameUser.UPDATE_PASSWORD,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.USER],
    }),
    deleteUserAccount: build.mutation<void, void>({
      query: () => ({
        url: EndpointNameUser.DELETE_USER_ACCOUNT,
        method: 'DELETE',
      }),
      invalidatesTags: [RTKTagNames.USER],
    }),
    setVisaHelp: build.mutation<SetVisaHelpResponse, SetVisaHelpRequest>({
      query: body => ({
        url: EndpointNameUser.SET_VISA_HELP,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.USER],
    }),
  }),
})

export const {
  useGetUserQuery,
  useLazyGetUserQuery,
  useUpdateUserProfileMutation,
  useUpdateUserEmailMutation,
  useUpdateUserPasswordMutation,
  useDeleteUserAccountMutation,
  useSetVisaHelpMutation,
} = UserExtendedEndpoints
