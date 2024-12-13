import {baseApi} from '..'
import {GetAllMatchUpJobsResponse, GetAllMatchUpJobsRequest} from './types'
import {EndpointNameMatchUp} from '@/constants/endpoints'

export const MatchUpExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getAllMatchUpJobs: build.query<GetAllMatchUpJobsResponse, GetAllMatchUpJobsRequest>({
      query: params => ({
        url: EndpointNameMatchUp.GET_MATCH_UP_JOB,
        method: 'GET',
        params,
      }),
    }),
  }),
})

export const {useGetAllMatchUpJobsQuery} = MatchUpExtendedEndpoints
