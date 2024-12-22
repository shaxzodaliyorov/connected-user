import {Pencil} from '@/icons'
import {Props} from './types'

export const ListItem = ({education}: Props) => (
  <div className={`py-6 transition-all duration-300 relative border-b border-b-[#D6DDEB]  `}>
    <h1 className="text-lg font-semibold lg:leading-[28.8px] text-left text-[#161C1C]">{education.university}</h1>
    <div className="flex gap-x-2 text-[#7C8493] items-center">
      <p className="text-base font-normal lg:leading-[25.6px] text-left">
        {education?.major}, {education.category}
      </p>
    </div>
    <p className="text-base text-[#7C8493] font-normal lg:leading-[25.6px] text-left">
      {education.admission_year} - {education.admission_year}
    </p>
    <p className="text-base font-normal text-[#161C1C] w-[60%] lg:leading-[25.6px] text-left">
      {education?.description}
    </p>
    <button className="border absolute text-[#6E86FF] top-6 right-0 p-[8px] border-solid rounded-[8px] border-[#D6DDEB]">
      <Pencil />
    </button>
  </div>
)
