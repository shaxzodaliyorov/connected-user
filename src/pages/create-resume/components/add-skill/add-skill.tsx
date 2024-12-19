import {FC} from 'react'
import {Props} from './types'
import {Controller} from 'react-hook-form'
import {SkillsInput} from '../skills-input'

export const AddSkill: FC<Props> = ({form}) => (
  <div>
    <h1 className="text-[#0b0b0b] text-2xl font-medium font-['Inter Display'] leading-relaxed">Add your skills</h1>
    <Controller
      name="skills"
      control={form.control}
      render={({field}) => <SkillsInput value={field.value} onChange={field.onChange} />}
    />
    <div className="py-10">
      <div className="w-full h-px bg-neutral-100" />
    </div>
  </div>
)
