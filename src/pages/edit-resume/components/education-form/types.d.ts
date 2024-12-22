import {UseFormReturn} from 'react-hook-form'

export type Props = {
  index: number
  form: UseFormReturn<any>
  remove: () => void
  fields: any[]
}
