import {baseApi} from '..'
import {EndpointNameJobs, RTKTagNames} from '@/constants'
import {
  ApplyJobRequest,
  ApplyJobResponse,
  GetAllJobsRequest,
  GetAllJobsResponse,
  GetApplicationsRequest,
  GetApplicationsResponse,
  GetFilterDataRequest,
  GetFilterDataResponse,
  GetPublicJobRequest,
  GetPublicJobResponse,
  GetSavedJobsRequest,
  GetSavedJobsResponse,
  GetSaveJobIdsRequest,
  GetSaveJobIdsResponse,
  GetTotalJobsAppliedRequest,
  GetTotalJobsAppliedResponse,
  SaveJobJobRequest,
  SaveJobJobResponse,
} from './types'

export const JobsExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getAllJobs: build.query<GetAllJobsResponse, GetAllJobsRequest>({
      query: params => ({
        url: EndpointNameJobs.GET_ALL_JOBS,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.JOBS],
    }),
    getFilterData: build.query<GetFilterDataResponse, GetFilterDataRequest>({
      query: params => ({
        url: EndpointNameJobs.GET_FILTER_DATA,
        method: 'GET',
        params,
      }),
    }),
    getPublicJob: build.query<GetPublicJobResponse, GetPublicJobRequest>({
      query: ({id}) => ({
        url: EndpointNameJobs.GET_PUBLIC_JOB + id,
        method: 'GET',
      }),
    }),
    saveJob: build.mutation<SaveJobJobResponse, SaveJobJobRequest>({
      query: ({id, type}) => ({
        url: EndpointNameJobs.SET_SAVE + id,
        method: 'PATCH',
        params: {type},
      }),
      invalidatesTags: [RTKTagNames.JOBS],
    }),
    getSaveJobIds: build.query<GetSaveJobIdsResponse, GetSaveJobIdsRequest>({
      query: () => ({
        url: EndpointNameJobs.GET_SAVE_JOB_IDS,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.JOBS],
    }),
    applyJob: build.mutation<ApplyJobResponse, ApplyJobRequest>({
      query: body => ({
        url: EndpointNameJobs.APPLY_JOB,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.JOBS],
    }),
    getSavedJobs: build.query<GetSavedJobsResponse, GetSavedJobsRequest>({
      query: () => ({
        url: EndpointNameJobs.GET_SAVED_JOBS,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.JOBS],
    }),
    getApplications: build.query<GetApplicationsResponse, GetApplicationsRequest>({
      query: params => ({
        url: EndpointNameJobs.GET_MY_APPLICATION,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.JOBS],
    }),
    getTotalJobsApplied: build.query<GetTotalJobsAppliedResponse, GetTotalJobsAppliedRequest>({
      query: params => ({
        url: EndpointNameJobs.GET_TOTAL_JOBS_APPLIED,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.JOBS],
    }),
  }),
})

export const {
  useGetAllJobsQuery,
  useLazyGetAllJobsQuery,
  useLazyGetFilterDataQuery,
  useGetFilterDataQuery,
  useGetPublicJobQuery,
  useLazyGetPublicJobQuery,
  useSaveJobMutation,
  useGetSaveJobIdsQuery,
  useApplyJobMutation,
  useGetSavedJobsQuery,
  useLazyGetApplicationsQuery,
  useGetApplicationsQuery,
  useGetTotalJobsAppliedQuery,
} = JobsExtendedEndpoints
