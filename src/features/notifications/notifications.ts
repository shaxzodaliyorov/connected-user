import {baseApi} from '..'
import {RTKTagNames} from '@/constants'
import {
  GetAllNotificationsRequest,
  GetAllNotificationsResponse,
  GetNotificationResponse,
  ReadNotificationResponse,
} from './types'
import {EndpointNameNotification} from '@/constants/endpoints'

export const NotificationExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getAllNotifications: build.query<GetAllNotificationsResponse, GetAllNotificationsRequest>({
      query: () => ({
        url: EndpointNameNotification.USER_NOTIFICATION,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.NOTIFICATIONS],
    }),
    getNotification: build.query<GetNotificationResponse, string>({
      query: id => ({
        url: EndpointNameNotification.USER_NOTIFICATION_GET + id,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.NOTIFICATIONS],
    }),
    readNotification: build.query<ReadNotificationResponse, void>({
      query: () => ({
        url: EndpointNameNotification.USER_NOTIFICATION_READ,
        method: 'PATCH',
      }),
      providesTags: [RTKTagNames.NOTIFICATIONS],
    }),
  }),
})

export const {useGetAllNotificationsQuery, useGetNotificationQuery, useReadNotificationQuery} =
  NotificationExtendedEndpoints
