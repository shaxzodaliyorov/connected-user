import {FC} from 'react'
import {Props} from './types'
import {useFieldArray} from 'react-hook-form'
import {EducationForm} from '../education-form'
import {Button} from '@/components'
import {HiMiniPlusCircle} from 'react-icons/hi2'

export const EDUCATION_LEVELS = [
  {label: 'Bachelor’s Degree (4 years)', value: 'Bachelor’s Degree (4 years)'},
  {label: 'Associate Degree (2 years)', value: 'Associate Degree (2 years)'},
  {label: 'Master’s Degree (2 years)', value: 'Master’s Degree (2 years)'},
  {label: 'PhD Degree', value: 'PhD Degree'},
  {label: 'High School Diploma', value: 'High School Diploma'},
  {label: 'Other', value: 'Other'},
]

export const AddEducation: FC<Props> = ({form}) => {
  const {fields, append, remove} = useFieldArray({
    control: form.control,
    name: 'education',
  })

  const appendElement = () => {
    append({
      admission_year: '',
      category: '',
      description: '',
      graduation_year: '',
      major: '',
      region: '',
      university: '',
    })
  }

  return (
    <div>
      <div>
        {fields?.map((education, index) => (
          <EducationForm fields={fields} remove={remove} key={education.id} index={index} form={form} />
        ))}
      </div>
      <div className="w-full flex justify-end">
        <Button
          variant="outline"
          className="px-[63px]"
          onClick={appendElement}
          size="sm"
          leftIcon={<HiMiniPlusCircle />}
        >
          Add
        </Button>
      </div>
      <div className="py-10">
        <div className="w-full h-px bg-neutral-100" />
      </div>
    </div>
  )
}
