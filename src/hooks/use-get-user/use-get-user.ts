/* eslint-disable unicorn/no-null */
import {useGetUserQuery} from '@/features/user'

export const useGetUser = () => {
  const {data} = useGetUserQuery('')
  return data?.data || null
}
