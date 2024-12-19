import React from 'react'
import {Props} from './types'
import {Progress} from '@/components/ui/progress'

export const ProfileProgress: React.FC<Props> = ({progress}) => (
  <div className="flex !w-full flex-col pt-4">
    <span className="text-base font-medium leading-[19.36px] text-left">{progress}%</span>
    <div className="relative w-full h-2 mt-2">
      <Progress value={10} className="w-full bg-neutral-100" />
    </div>
  </div>
)
