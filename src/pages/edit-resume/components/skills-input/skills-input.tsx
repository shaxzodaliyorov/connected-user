import {useEffect, useState} from 'react'
import {Props} from './types'
import {Input} from '@/components'
import {CloseIcon} from '@/icons/close'

export const SkillsInput = ({onChange, value, errorMessage}: Props) => {
  const [skills, setSkills] = useState<string[]>(value || [])

  const addHandlerSkills = (event: React.KeyboardEvent<HTMLInputElement> & React.ChangeEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      if (event.target.value !== '') {
        setSkills([...skills, event.target.value])
        onChange([...skills, event.target.value])
        event.target.value = ''
      }
    }
  }

  useEffect(() => {
    if (value?.length) {
      setSkills(value)
    }
  }, [value])

  const removeHandlerSkills = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index))
  }

  return (
    <div className="pt-8">
      <Input
        type="text"
        label="Add your skills"
        placeholder="Please enter your tools and skills"
        onKeyDown={addHandlerSkills}
        errorMessage={errorMessage}
        className="w-1/2"
      />
      <div className="flex gap-4 pt-4 flex-wrap">
        {skills?.map((skill, index) => (
          <div
            className="text-[#0b0b0b] text-sm font-normal font-['Inter Display'] leading-none px-3 py-1 bg-neutral-100 rounded-lg justify-center items-center gap-2.5 inline-flex"
            key={index}
          >
            {skill}
            <button className="hover:text-opacity-50" onClick={() => removeHandlerSkills(index)} type="button">
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
