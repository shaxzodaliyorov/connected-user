import {baseApi} from '..'
import {EndpointNameInfo} from '@/constants'
import {
  GetAllUniversityRequest,
  GetAllUniversityResponse,
  GetPositionRequest,
  GetPositionResponse,
  GetAllCountryRequest,
  GetAllCountryResponse,
  GetAllNationalityRequest,
  GetAllNationalityResponse,
} from './types'

export const InfoExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getAllUniversity: build.query<GetAllUniversityResponse, GetAllUniversityRequest>({
      query: params => ({
        url: EndpointNameInfo.GET_ALL_UNIVERSITY,
        method: 'GET',
        params,
      }),
    }),
    getPosition: build.query<GetPositionResponse, GetPositionRequest>({
      query: params => ({
        url: EndpointNameInfo.GET_POSITION,
        method: 'GET',
        params,
      }),
    }),
    getAllCountry: build.query<GetAllCountryResponse, GetAllCountryRequest>({
      query: params => ({
        url: EndpointNameInfo.GET_ALL_COUNTRY,
        method: 'GET',
        params,
      }),
    }),
    getAllNationality: build.query<GetAllNationalityResponse, GetAllNationalityRequest>({
      query: params => ({
        url: EndpointNameInfo.GET_ALL_NATIONALITY,
        method: 'GET',
        params,
      }),
    }),
  }),
})

export const {
  useGetAllUniversityQuery,
  useLazyGetAllUniversityQuery,
  useGetPositionQuery,
  useLazyGetPositionQuery,
  useGetAllCountryQuery,
  useLazyGetAllCountryQuery,
  useGetAllNationalityQuery,
  useLazyGetAllNationalityQuery,
} = InfoExtendedEndpoints
