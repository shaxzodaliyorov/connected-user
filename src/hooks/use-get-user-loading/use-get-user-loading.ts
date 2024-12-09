import {useGetUserQuery} from '@/features/user'

export const useGetUserLoading = () => {
  const {isLoading} = useGetUserQuery('')
  return isLoading
}
