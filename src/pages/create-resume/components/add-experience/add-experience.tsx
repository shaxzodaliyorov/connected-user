import {FC} from 'react'
import {Props} from './types'
import {useFieldArray} from 'react-hook-form'
import {ExperienceForm} from '../experience-form'
import {Button} from '@/components'
import {HiMiniPlusCircle} from 'react-icons/hi2'

export const AddExperience: FC<Props> = ({form}) => {
  const {fields, append, remove} = useFieldArray({
    control: form.control,
    name: 'experience',
  })

  const appendElement = () => {
    append({
      company: '',
      description: '',
      employment_type: '',
      joining_year: '',
      location: '',
      retirement_year: '',
      still_working: false,
      title: '',
      website: '',
    })
  }

  return (
    <div>
      <div className="w-full">
        {fields?.map((education, index) => (
          <ExperienceForm fields={fields} remove={remove} key={education.id} index={index} form={form} />
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
    </div>
  )
}
