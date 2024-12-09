import {configureStore} from '@reduxjs/toolkit'
import {baseApi} from '../features'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})

export type TRootState = ReturnType<typeof store.getState>
export type TDispatch = typeof store.dispatch
