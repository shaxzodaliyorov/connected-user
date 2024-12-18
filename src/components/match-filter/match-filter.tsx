/* eslint-disable arrow-body-style */
/* eslint-disable unicorn/no-null */
import React, {useState} from 'react'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'
import {ListGroup, Select} from '../common'
import {useGetFilterData} from '@/hooks'
import {IoReload} from 'react-icons/io5'

type MatchFilterType = 'category' | 'gender' | 'location' | 'employment'

type MatchFilterOption = {
  label: string
  value: string
}

export type SelectedMatchFilters = {
  category: string | undefined
  location: string | undefined
  gender: string | undefined
  employment: string | undefined
}

type MatchFilterProps = {
  onChange: (filters: SelectedMatchFilters) => void
}

export const MatchFilter: React.FC<MatchFilterProps> = ({onChange}) => {
  const {allCategoryFilterData} = useGetFilterData()

  const [selectedFilters, setSelectedFilters] = useState<SelectedMatchFilters>({
    category: undefined,
    location: undefined,
    gender: undefined,
    employment: undefined,
  })

  const handleChange = (filterType: MatchFilterType, value: string | undefined) => {
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
      location: undefined,
      gender: undefined,
      employment: undefined,
    })
    onChange({
      category: undefined,
      location: undefined,
      gender: undefined,
      employment: undefined,
    })
  }

  const getFilterOptions = (type: MatchFilterType): MatchFilterOption[] => {
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
            <p className="text-[#0b0b0b] text-base font-medium font-['Inter Display'] leading-tight">Location</p>
          </AccordionTrigger>
          <AccordionContent>
            <Select
              value={selectedFilters.location as string}
              onChange={value => handleChange('location', value)}
              wrapperClassName="h-[36px] rounded-lg"
              placeholder="Location"
              options={getFilterOptions('location')}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="mt-3">
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

        <AccordionItem value="item-4" className="mt-3">
          <AccordionTrigger>
            <p className="text-[#0b0b0b] text-base font-medium font-['Inter Display'] leading-tight">
              Type of employment
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <ListGroup
              value={selectedFilters.employment as string}
              onChange={value => handleChange('employment', value)}
              options={getFilterOptions('employment')}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
