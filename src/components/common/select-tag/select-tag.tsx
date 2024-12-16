import {FC} from 'react'
import {SelectTagProps} from './types'
import {cn} from '@/lib/utils'

export const SelectTag: FC<SelectTagProps> = ({onChange, options, value, className}) => (
  <div className={cn('w-full flex flex-wrap gap-2', className)}>
    {options?.map(item => (
      <div
        key={item.value}
        onClick={() => onChange(item.value)}
        style={{
          background: item.value === value ? '#0062ff' : '#e7e7e7',
          color: item.value === value ? '#fff' : '#0b0b0b',
        }}
        className="px-[13px] cursor-pointer hover:opacity-80 py-1.5 bg-[#e7e7e7] rounded-2xl justify-center items-center gap-2.5 inline-flex text-sm font-medium font-['Inter Display'] leading-tight"
      >
        {item.label}
      </div>
    ))}
  </div>
)
