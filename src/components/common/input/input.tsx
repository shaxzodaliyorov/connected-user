import {useState, forwardRef} from 'react'
import {InputProps} from './types'
import {cn} from '@/lib/utils'
import {IoEye, IoEyeOff} from 'react-icons/io5'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      value,
      onChange,
      onClick,
      className = '',
      type = 'text',
      disabled = false,
      leftIcon,
      rightIcon,
      errorMessage,
      size = 'md',
      fullWidth = false,
      placeholder,
      inputSizeClassName,
      wrapperClassName,
      name,
      onKeyDown,
      onBlur,
      onFocus,
      leftElement,
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
      setShowPassword(prev => !prev)
    }

    let inputSizeClasses = ''
    switch (size) {
      case 'sm':
        inputSizeClasses = 'px-3 py-2 text-sm'
        break
      case 'md':
        inputSizeClasses = 'px-4 py-2 text-base'
        break
      case 'lg':
        inputSizeClasses = 'px-6 py-3 text-lg'
        break
      default:
        inputSizeClasses = 'px-4 py-2 text-base'
    }

    return (
      <label className={cn('flex flex-col', fullWidth && 'w-full', className)}>
        {label && (
          <span className="text-[#0b0b0b] text-base inline-block mb-2 font-normal font-['Inter Display']">{label}</span>
        )}
        <div
          className={cn(
            `relative flex justify-between border items-center border-[#c5c5c5] text-center text-[#0b0b0b] text-lg font-normal font-['Inter Display'] rounded-lg ${errorMessage ? 'border-red-500' : 'border-gray-300'}`,
            wrapperClassName,
          )}
        >
          {leftElement && leftElement}
          {leftIcon && <span className="absolute left-3">{leftIcon}</span>}

          <input
            ref={ref}
            type={type === 'password' && showPassword ? 'text' : type}
            value={value}
            onChange={onChange}
            disabled={disabled}
            onClick={onClick}
            placeholder={placeholder}
            className={cn(
              'w-full h-14 pr-12 rounded-md text-[#0b0b0b] text-lg font-normal focus:outline-none focus:ring-2 focus:ring-blue-300',
              leftIcon ? '!pl-10' : '',
              inputSizeClasses,
              inputSizeClassName,
            )}
            name={name}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            onFocus={onFocus}
          />

          {type === 'password' && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 text-black"
              disabled={disabled}
            >
              {showPassword ? <IoEye /> : <IoEyeOff />}
            </button>
          )}
          {rightIcon && !showPassword && <span className="absolute right-2">{rightIcon}</span>}
        </div>

        {errorMessage && <span className="text-red-500 text-xs mt-1">{errorMessage}</span>}
      </label>
    )
  },
)

Input.displayName = 'Input'
