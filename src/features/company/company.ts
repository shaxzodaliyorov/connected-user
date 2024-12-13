import {baseApi} from '..'
import {EndpointNameCompany} from '@/constants/endpoints'
import {GetCompanyResponse} from './types'

export const CompanyExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getCompany: build.query<GetCompanyResponse, string>({
      query: id => ({
        url: EndpointNameCompany.GET_COMPANY + id,
        method: 'GET',
      }),
    }),
  }),
})

export const {useGetCompanyQuery} = CompanyExtendedEndpoints
