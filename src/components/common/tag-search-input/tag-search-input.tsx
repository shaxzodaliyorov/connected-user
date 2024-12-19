import React from 'react'
import {Input} from '../input'
import {TagInputProps} from './types'
import {SearchIcon} from '@/icons/search'
import {Skeleton} from '@/components/ui/skeleton'

export const TagSearchInput: React.FC<TagInputProps> = ({
  loading = false,
  inputProps,
  suggestions,
  onChange,
  value,
}) => (
  <div className="tag-input">
    <Input
      leftIcon={<SearchIcon />}
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={'Please enter your tools and skills'}
      inputSizeClassName="pl-[50px]"
      {...inputProps}
    />
    <div className="flex flex-wrap gap-1 pt-4">
      {loading ? (
        <>
          <Skeleton className="w-[120px] h-[20px]" />
          <Skeleton className="w-[120px] h-[20px]" />
          <Skeleton className="w-[120px] h-[20px]" />
          <Skeleton className="w-[120px] h-[20px]" />
        </>
      ) : suggestions?.length ? (
        suggestions?.map((tag, index) => (
          <div
            key={index}
            onClick={() => onChange(tag.value)}
            style={{
              background: tag.value === value ? '#0062ff' : '#e7e7e7',
              color: tag.value === value ? '#fff' : '#0b0b0b',
            }}
            className="px-3 py-1 cursor-pointer rounded-lg border text-[#0b0b0b] text-sm font-normal font-['Inter Display'] leading-none border-[#c5c5c5] justify-center items-center gap-1 inline-flex"
          >
            {tag.label}
          </div>
        ))
      ) : (
        <div className="w-full flex items-center justify-center">
          <p className="text-[#7d7d7d] text-sm font-normal font-['Inter Display'] leading-none text-center">
            No suggestions
          </p>
        </div>
      )}
    </div>
  </div>
)
