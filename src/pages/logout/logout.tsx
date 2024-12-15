import {RTKTagNames} from '@/constants'
import {baseApi} from '@/features'
import {useStorage} from '@/utils/storage'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'

export const LogoutPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    useStorage.removeCredentials()
    dispatch(baseApi.util.invalidateTags([RTKTagNames.USER]))
    window.location.href = '/sign-in'
  }, [])

  return <></>
}
