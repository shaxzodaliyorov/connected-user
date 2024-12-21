import {cn} from '@/lib/utils'
import {Button} from '@/components/ui/button'
import {Calendar} from '@/components/ui/calendar'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {useEffect, useState} from 'react'
import dayjs from 'dayjs'
import {Props} from './types'
import {Calendar2} from '@/icons'

export const DatePicker = ({
  label,
  onChange,
  value,
  errorMessage,
  className,
  hideIcon,
  placeholder,
  labelClassName,
  wrapperClassName,
  iconClassName,
  format = 'MM/DD/YYYY',
}: Props) => {
  const [date, setDate] = useState<Date>()

  useEffect(() => {
    if (value) {
      setDate(new Date(value))
    }
  }, [value])

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    if (onChange && selectedDate) {
      onChange(selectedDate.toISOString() as any)
    }
  }

  return (
    <div className={cn('flex flex-col justify-start', wrapperClassName)}>
      {label && (
        <span
          className={cn(
            "text-[#0b0b0b] inline-block mb-2 text-base font-normal font-['Inter Display']",
            labelClassName,
          )}
        >
          {label}
        </span>
      )}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant={'outline'}
            className={cn(
              `h-14 px-4 py-2.5 bg-white rounded-lg border border-[#c5c5c5] justify-between items-center inline-flex overflow-hidden `,
              !date && 'text-muted-foreground',
              errorMessage && 'border-red-500',
              className,
            )}
          >
            {date ? dayjs(date).format(format) : <span>{placeholder || 'Pick a date'}</span>}
            {!hideIcon && <Calendar2 className={cn('mr-2 h-4 w-4', iconClassName)} />}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            captionLayout="dropdown"
            mode="single"
            selected={date}
            fromYear={1950}
            toYear={new Date().getFullYear() + 10}
            onSelect={handleDateChange}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {errorMessage && <span className="text-red-500 text-xs mt-1">{errorMessage}</span>}
    </div>
  )
}
