import {FC} from 'react'
import {Props} from './types'
import {cn} from '@/lib/utils'

export const Loader: FC<Props> = ({className}) => (
  <div className={cn('w-full h-10 flex justify-center items-center', className)}>
    <span className="loader"></span>
  </div>
)
