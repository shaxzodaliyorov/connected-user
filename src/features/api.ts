/* eslint-disable unicorn/no-null */
import {EndpointNameUser, RTKTagNames, SERVER_URL} from '@/constants'
import {useStorage} from '@/utils/storage'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Mutex} from 'async-mutex'

export const baseUrl = `${SERVER_URL}/api/`

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers: any) => {
    const accessToken = useStorage.getTokens().accessToken?.split(' ')[1]
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }
    headers.set('Accept', 'application/json')
    return headers
  },
})

const customFetchBase = async (args: any, api: any, extraOptions: any) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  const refreshToken = useStorage.getTokens().refreshToken?.split(' ')[1]

  if (args.url === 'user/me' && !refreshToken) {
    return {data: null}
  }

  if (result.error) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const refreshResult = (await baseQuery(
          {
            url: EndpointNameUser.REFRESH_TOKEN + refreshToken,
            method: 'POST',
          },
          api,
          extraOptions,
        )) as any

        if (refreshResult.data) {
          result = await baseQuery(args, api, extraOptions)
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: customFetchBase,
  tagTypes: Object.values(RTKTagNames),
  endpoints: () => ({}),
})
