import React from 'react'
import {cn} from '@/lib/utils'
import {SelectProps} from './types'

export const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  className = '',
  disabled = false,
  errorMessage,
  size = 'md',
  fullWidth = false,
  wrapperClassName,
}) => {
  let selectSizeClasses = ''
  switch (size) {
    case 'sm':
      selectSizeClasses = 'px-3 py-2 text-sm'
      break
    case 'md':
      selectSizeClasses = 'px-4 py-2 text-base'
      break
    case 'lg':
      selectSizeClasses = 'px-6 py-3 text-lg'
      break
    default:
      selectSizeClasses = 'px-4 py-2 text-base'
  }

  return (
    <label className={cn('flex flex-col', fullWidth && 'w-full', className)}>
      {label && (
        <span className="text-[#0b0b0b] text-base inline-block mb-2 font-normal font-['Inter Display']">{label}</span>
      )}
      <div
        className={cn(
          `relative flex items-center border border-[#c5c5c5] text-center text-[#0b0b0b] text-lg font-normal font-['Inter Display'] rounded-lg ${errorMessage ? 'border-red-500' : 'border-gray-300'}`,
          wrapperClassName,
        )}
      >
        <select
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={cn(
            'w-full h-14 bg-white rounded-md text-[#0b0b0b] focus:outline-none focus:ring-2 focus:ring-blue-300',
            selectSizeClasses,
          )}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {errorMessage && <span className="text-red-500 text-xs mt-1">{errorMessage}</span>}
    </label>
  )
}
