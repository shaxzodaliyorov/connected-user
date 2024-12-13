import {useTranslation} from 'react-i18next'

export const useErrorMsg = () => {
  const {t} = useTranslation()

  return (error: any) =>
    typeof error === 'string'
      ? error
      : typeof error === 'object'
        ? error?.msg ||
          error?.msg ||
          error?.error?.msg ||
          error?.error?.msg ||
          error?.data?.error?.msg ||
          t('errors.unknown')
        : t('errors.unknown')
}
