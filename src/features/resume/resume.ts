import {
  AddResumeResponse,
  AddResumeResumeRequest,
  DeleteResumeResponse,
  GetAllMyResumeRequest,
  GetAllMyResumeResponse,
  GetResumeResponse,
  UpdateResumeResponse,
  UpdateResumeResumeRequest,
} from './types'
import {baseApi} from '..'
import {EndpointNameResume, RTKTagNames} from '@/constants'

export const ResumeExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getAllMyResume: build.query<GetAllMyResumeResponse, GetAllMyResumeRequest>({
      query: params => ({
        url: EndpointNameResume.GET_ALL_MY_RESUMES,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.RESUME],
    }),
    getResume: build.query<GetResumeResponse, string>({
      query: id => ({
        url: EndpointNameResume.GET_RESUME + id,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.RESUME],
    }),
    addResume: build.mutation<AddResumeResponse, AddResumeResumeRequest>({
      query: body => ({
        url: EndpointNameResume.ADD_RESUME,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.RESUME],
    }),
    updateResume: build.mutation<UpdateResumeResponse, UpdateResumeResumeRequest>({
      query: ({body, id}) => ({
        url: EndpointNameResume.UPDATE_RESUME + id,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.RESUME],
    }),
    deleteResume: build.mutation<DeleteResumeResponse, string>({
      query: id => ({
        url: EndpointNameResume.DELETE_RESUME + id,
        method: 'DELETE',
      }),
      invalidatesTags: [RTKTagNames.RESUME],
    }),
  }),
})

export const {
  useAddResumeMutation,
  useGetAllMyResumeQuery,
  useDeleteResumeMutation,
  useUpdateResumeMutation,
  useGetResumeQuery,
  useLazyGetResumeQuery,
} = ResumeExtendedEndpoints
