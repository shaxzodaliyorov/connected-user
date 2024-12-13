import {GetAllVisaNewsRequest, GetAllVisaNewsResponse, GetVisaNewsResponse} from './types'
import {baseApi} from '..'
import {EndpointNameVisaNews, RTKTagNames} from '@/constants'

export const VisaNewsExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getAllVisaNews: build.query<GetAllVisaNewsResponse, GetAllVisaNewsRequest>({
      query: params => ({
        url: EndpointNameVisaNews.GET_ALL_VISA_NEWS,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.NEWS],
    }),
    getVisaNews: build.query<GetVisaNewsResponse, string>({
      query: (id: string) => ({
        url: `${EndpointNameVisaNews.GET_VISA_NEWS}${id}`,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.NEWS],
    }),
  }),
})

export const {useGetAllVisaNewsQuery, useLazyGetAllVisaNewsQuery, useGetVisaNewsQuery} = VisaNewsExtendedEndpoints
