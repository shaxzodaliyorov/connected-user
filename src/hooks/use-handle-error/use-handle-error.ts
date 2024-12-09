import {useToast} from '@/components/ui/use-toast'
import {useErrorMsg} from '../use-error-msg'
import {useTranslation} from 'react-i18next'

export const useHandleError = () => {
  const {toast} = useToast()
  const getErrorMsg = useErrorMsg()
  const {t} = useTranslation()

  return (error: any) => {
    toast({
      variant: 'destructive',
      title: t(`${getErrorMsg(error)}`),
    })
  }
}
