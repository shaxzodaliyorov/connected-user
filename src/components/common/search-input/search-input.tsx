import {useRef, useState, useEffect} from 'react'
import {Input} from '../input'
import {Loader} from '@/components/loader'
import {SearchInputProps} from './types'

export const SearchInput = ({
  options,
  onChange,
  value,
  isSearching,
  label,
  placeholder,
  errorMessage,
  leftIcon,
}: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleSelectOption = (val: string) => {
    if (inputRef.current && onChange) {
      inputRef.current.value = val
      const event = {target: {value: val}} as React.ChangeEvent<HTMLInputElement>
      onChange(event)
    }
    setOpen(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={containerRef}>
      <Input
        placeholder={placeholder}
        label={label}
        value={value}
        onFocus={() => setOpen(true)}
        onChange={onChange}
        ref={inputRef}
        errorMessage={errorMessage}
        leftIcon={leftIcon}
        className="h-14"
      />
      {open && (
        <div className="absolute z-[999] top-24 border w-full max-h-[200px] overflow-y-auto bg-white rounded-md shadow-md overflow-hidden">
          {isSearching ? (
            <div className="w-full py-10 flex items-center justify-center">
              <Loader />
            </div>
          ) : options.length ? (
            options?.map((opt: {label: string; value: string}) => (
              <div
                className="py-2 cursor-pointer  pl-4 hover:!bg-gray-200"
                key={opt.value}
                onClick={() => handleSelectOption(opt.value)}
              >
                <p className="line-clamp-1"> {opt.label}</p>
              </div>
            ))
          ) : (
            <div className="w-full py-10 flex items-center justify-center ">
              <p className="text-gray-400">No Options</p>
            </div>
          )}
        </div>
      )}{' '}
    </div>
  )
}
