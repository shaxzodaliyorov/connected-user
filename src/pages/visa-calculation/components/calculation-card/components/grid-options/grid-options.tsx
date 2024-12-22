import {cn} from '@/lib/utils'
import {Props} from './types'

export const GridOptions = ({onChange, options, value, contentClassName, labelClassName}: Props) => (
  <div className={cn('grid grid-cols-6 gap-x-[14px] gap-y-[16px] justify-between w-full', contentClassName)}>
    {options.map((opt, index) => (
      <div
        key={index}
        onClick={() => onChange({point: opt.point, value: opt?.value})}
        className={` ${opt.value === value?.value ? 'border-[#6E86FF] !text-white bg-[#6E86FF]' : 'border-[#D6DDEB] bg-white'} border cursor-pointer items-center flex justify-between py-[11px] px-[16px] rounded-lg border-solid w-full`}
      >
        <p
          className={cn(
            'text-center text-base not-italic leading-[17.6px]',
            opt.value === value?.value ? 'text-white' : 'text-black',
            labelClassName,
          )}
        >
          {opt.label}
        </p>
        <p
          className={` ${opt.value === value?.value ? 'text-white' : 'text-[#0062FF]'} mt-2 text-base not-italic font-medium leading-[120%]`}
        >
          {opt.subLabel}
        </p>
      </div>
    ))}
  </div>
)
