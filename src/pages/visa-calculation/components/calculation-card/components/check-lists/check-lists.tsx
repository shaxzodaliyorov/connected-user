import {Checkbox} from '@/components/ui/checkbox'
import {Props} from './types'
import {cn} from '@/lib/utils'

export const CheckLists = ({onChange, options, value, labelClassName, contentClassName}: Props) => (
  <div className={cn('grid grid-cols-3 gap-x-4 gap-y-4', contentClassName)}>
    {options?.map((opt, index) => (
      <label
        key={index}
        className={`${
          opt.value === value?.value ? 'text-black' : 'text-black'
        } border flex items-center justify-between select-none py-[14px] px-[16px] cursor-pointer w-full border-[#D6DDEB] rounded-lg border-solid`}
      >
        <div className="flex w-[85%] gap-x-2.5 items-center">
          <Checkbox
            className="w-4 h-4 data-[state=checked]:bg-[#0062FF] data-[state=checked]:border-[#0062FF] data-[state=checked]:border"
            checked={opt.value === value?.value}
            onCheckedChange={() => onChange({point: opt.point, value: opt.value})}
          />
          <p className={cn('text-base not-italic font-normal leading-[22.4px]', labelClassName)}>{opt.label}</p>
        </div>
        <p className="text-base not-italic font-normal text-[#0062FF] leading-6">{opt.subLabel}</p>
      </label>
    ))}
  </div>
)
