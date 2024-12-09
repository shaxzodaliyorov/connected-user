import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Mutex} from 'async-mutex'

export const baseUrl = `''/api/`

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers: any) => {
    const token = ''
    const accessToken = token?.split(' ')
    if (token) {
      headers.set('Authorization', `Bearer ${accessToken?.[1]}`)
    }
    headers.set('Accept', 'application/json')
    return headers
  },
})

const customFetchBase = async (args: any, api: any, extraOptions: any) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = (await baseQuery(
          {
            url: '',
            body: {
              accessToken: api.getState()?.auth?.token,
              refreshToken: api.getState()?.auth?.refreshToken,
            } as any,
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
  tagTypes: [],
  endpoints: () => ({}),
})
