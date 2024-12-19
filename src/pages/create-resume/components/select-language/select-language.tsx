/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react'
import {Select} from '@/components'
import {Trash} from '@/icons'
import {HiMiniPlusCircle} from 'react-icons/hi2'

type LanguageSkill = {
  id: number
  title: string
  level: string
}

type SelectLanguageProps = {
  value: LanguageSkill[]
  onChange: (skills: LanguageSkill[]) => void
  errorMessage?: string
}

export const LANGUAGES = [
  {label: 'English', value: 'English'},
  {label: 'Korean', value: 'Korean'},
  {label: 'Chinese', value: 'Chinese'},
  {label: 'Japanese', value: 'Japanese'},
  {label: 'Russian', value: 'Russian'},
  {label: 'Spanish', value: 'Spanish'},
]

export const LEVELS = [
  {label: 'A1', value: 'A1'},
  {label: 'A2', value: 'A2'},
  {label: 'B1', value: 'B1'},
  {label: 'B2', value: 'B2'},
  {label: 'C1', value: 'C1'},
  {label: 'C2', value: 'C2'},
]

export const SelectLanguage: React.FC<SelectLanguageProps> = ({value, onChange, errorMessage}) => {
  const handleAddLanguage = () => {
    onChange([...value, {id: Date.now(), title: '', level: ''}])
  }

  const handleDeleteLanguage = (id: number) => {
    onChange(value.filter(skill => skill.id !== id))
  }

  const handleChange = (id: number, field: string, fieldValue: string) => {
    onChange(value.map(skill => (skill.id === id ? {...skill, [field]: fieldValue} : skill)))
  }

  return (
    <div>
      <div
        className="text-[#0b0b0b] cursor-pointer flex items-center gap-x-2 text-xl font-medium font-['Inter Display'] leading-snug"
        onClick={handleAddLanguage}
      >
        <span>Language skills</span>
        <HiMiniPlusCircle color="#0062FF" />
      </div>
      <div className="w-full">
        {value?.map((skill, index) => {
          const selectedLanguages = value?.filter((_, i) => i !== index).map((skill: any) => skill.language)
          const availableLanguages = LANGUAGES?.filter(lang => !selectedLanguages.includes(lang.value))

          return (
            <div key={skill.id} className="grid pt-6 gap-x-[22px] grid-cols-2 relative items-center">
              <Select
                placeholder="Select language"
                label="Languages"
                options={availableLanguages}
                value={skill.title}
                onChange={val => handleChange(skill.id, 'language', val)}
              />
              <Select
                placeholder="Select level"
                label="Level"
                options={LEVELS}
                value={skill.level}
                onChange={val => handleChange(skill.id, 'level', val)}
              />
              <button
                className="absolute -right-9 bottom-[8%] -translate-y-1/2"
                onClick={() => handleDeleteLanguage(skill.id)}
              >
                <Trash className="w-6 h-6 text-[#F13325]" />
              </button>
            </div>
          )
        })}
        {errorMessage && <span className="text-red-500 text-xs mt-1">{errorMessage}</span>}
      </div>
    </div>
  )
}
