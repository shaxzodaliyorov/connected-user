export interface Notification {
  _id: string
  user: string
  title: string
  description: string
  is_read: boolean
  read_at: string
  updated_at: string
}

export interface GetAllNotificationsResponse {
  success: boolean
  data: Notification[]
}
export interface GetAllNotificationsRequest {}

export interface GetNotificationResponse {
  success: boolean
  data: Notification
}
export interface GetNotificationRequest {}

export interface ReadNotificationResponse {}
