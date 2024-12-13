import {FC} from 'react'
import {MainCardProps} from './types'
import {cn} from '@/lib/utils'

export const MainCard: FC<MainCardProps> = ({children, className}) => (
  <div className={cn('p-[30px] overflow-hidden bg-white rounded-[15px]', className)}>{children}</div>
)
