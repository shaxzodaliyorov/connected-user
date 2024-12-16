/* eslint-disable arrow-body-style */
/* eslint-disable unicorn/no-null */
import React, {useState} from 'react'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'
import {ListGroup, Select, SelectTag} from '../common'
import {useGetFilterData} from '@/hooks'
import {IoReload} from 'react-icons/io5'

type FilterType = 'category' | 'gender' | 'visa' | 'korean_language_skills'

type FilterOption = {
  label: string
  value: string
}

export type SelectedFilters = {
  category: string | undefined
  gender: string | undefined
  visa: string | undefined
  korean_language_skills: string | undefined
}

type FilterProps = {
  onChange: (filters: SelectedFilters) => void
}

export const Filter: React.FC<FilterProps> = ({onChange}) => {
  const {allCategoryFilterData} = useGetFilterData()

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    category: undefined,
    gender: undefined,
    visa: undefined,
    korean_language_skills: undefined,
  })

  const handleChange = (filterType: FilterType, value: string | undefined) => {
    const updatedFilters = {
      ...selectedFilters,
      [filterType]: value,
    }
    setSelectedFilters(updatedFilters)
    onChange(updatedFilters)
  }

  const onClear = () => {
    setSelectedFilters({
      category: undefined,
      gender: undefined,
      visa: undefined,
      korean_language_skills: undefined,
    })
    onChange({
      category: undefined,
      gender: undefined,
      visa: undefined,
      korean_language_skills: undefined,
    })
  }

  const getFilterOptions = (type: FilterType): FilterOption[] => {
    return (
      allCategoryFilterData
        .find(item => item.value === type)
        ?.subCategories?.map(item => ({
          label: item,
          value: item,
        })) || []
    )
  }

  return (
    <div className="w-full h-full p-5 rounded-[15px] bg-white">
      <div className="flex items-center justify-between">
        <h1 className="text-[#0b0b0b] text-lg font-medium font-['Inter Display'] leading-snug">Filter</h1>
        <button onClick={onClear} className="relative">
          <IoReload size={18} />
          {Object.values(selectedFilters).some(value => value !== undefined) && (
            <div className="w-1 h-1 bg-red-500 rounded-full absolute -left-px -top-px" />
          )}
        </button>
      </div>
      <div className="pt-5 pb-3">
        <div className="w-full h-px bg-neutral-100" />
      </div>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p className="text-[#0b0b0b] text-base font-medium font-['Inter Display'] leading-tight">Job Category</p>
          </AccordionTrigger>
          <AccordionContent>
            <Select
              value={selectedFilters.category as string}
              onChange={value => handleChange('category', value)}
              wrapperClassName="h-[36px] rounded-lg"
              placeholder="Job Category"
              options={getFilterOptions('category')}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="mt-3">
          <AccordionTrigger>
            <p className="text-[#0b0b0b] text-base font-medium font-['Inter Display'] leading-tight">Gender</p>
          </AccordionTrigger>
          <AccordionContent>
            <ListGroup
              value={selectedFilters.gender as string}
              onChange={value => handleChange('gender', value)}
              options={getFilterOptions('gender')}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="mt-3">
          <AccordionTrigger>
            <p className="text-[#0b0b0b] text-base font-medium font-['Inter Display'] leading-tight">Visa</p>
          </AccordionTrigger>
          <AccordionContent>
            <SelectTag
              value={selectedFilters.visa as string}
              onChange={value => handleChange('visa', value)}
              options={getFilterOptions('visa')}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="mt-3">
          <AccordionTrigger>
            <p className="text-[#0b0b0b] text-base font-medium font-['Inter Display'] leading-tight">
              Korean Language Skill
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <SelectTag
              value={selectedFilters.korean_language_skills as string}
              onChange={value => handleChange('korean_language_skills', value)}
              options={getFilterOptions('korean_language_skills')}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
