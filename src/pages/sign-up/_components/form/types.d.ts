import {UseFormReturn} from 'react-hook-form'
import {FormValues} from '../../types'

export type Props = {
  form: UseFormReturn<Partial<FormValues>>
  agreeData: any[]
  setAgreeData: (state: any) => void
}
