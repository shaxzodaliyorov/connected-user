import {useCallback} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

export const useManageQuery = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const addQuery = useCallback(
    (newParams: Record<string, string | string[]>) => {
      const currentParams = new URLSearchParams(location.search)

      Object.keys(newParams).forEach(key => {
        const value = newParams[key]
        if (Array.isArray(value)) {
          currentParams.set(key, value.join(','))
        } else {
          currentParams.set(key, value)
        }
      })

      navigate(
        {
          pathname: location.pathname,
          search: currentParams.toString(),
        },
        {replace: true},
      )
    },
    [navigate, location],
  )

  const removeQuery = useCallback(
    (keys: string | string[]) => {
      const currentParams = new URLSearchParams(location.search)

      if (Array.isArray(keys)) {
        keys.forEach(key => currentParams.delete(key))
      } else {
        currentParams.delete(keys)
      }

      navigate(
        {
          pathname: location.pathname,
          search: currentParams.toString(),
        },
        {replace: true},
      )
    },
    [navigate, location],
  )

  const getQuery = useCallback(
    (key: string) => {
      const currentParams = new URLSearchParams(location.search)
      return currentParams.get(key)
    },
    [location.search],
  )

  return {addQuery, removeQuery, getQuery}
}
