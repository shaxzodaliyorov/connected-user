import {FC} from 'react'
import {ListGroupProps} from './types'
import {Checkbox} from '@/components/ui/checkbox'
import {cn} from '@/lib/utils'

export const ListGroup: FC<ListGroupProps> = ({onChange, options, value, className}) => (
  <div className={cn('flex flex-col gap-y-[17px]', className)}>
    {options.map(item => (
      <label
        className="flex cursor-pointer gap-x-2 items-center"
        key={item.value}
        onClick={() => {
          if (item.value !== value) {
            onChange(item.value)
          }
        }}
      >
        <Checkbox
          checked={item.value === value}
          className="w-5 h-5 shadow-none border-[#D6DDEB] data-[state=checked]:border-[#0062ff] data-[state=checked]:bg-[#0062ff]"
        />
        <p className="text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-tight">{item.label}</p>
      </label>
    ))}
  </div>
)
