import {Pencil} from '@/icons'
import {Props} from './types'

export const ItemList = ({experience, resume}: Props) => (
  <>
    <div className="mt-[6px]">
      <div className="flex justify-between">
        <h5 className=" text-xl font-normal leading-[26px] text-left text-[#0C0C0C]">{experience?.title}</h5>
        <div className="bg-[#FFFFFF] text-[#0062FF] p-[8px]">
          <Pencil />
        </div>
      </div>
      <div className="flex mt-[6px]">
        <h5 className=" text-base font-normal leading-6 text-left text-[#0C0C0C]">
          {experience?.company} <span className="text-[#C5C5C5]">•</span> {resume?.employee_type}
        </h5>
      </div>
      <div className="flex mt-[6px]">
        <h5 className="text-sm font-normal leading-[22.4px] text-left text-[#737373]">
          {experience?.joining_year} - {experience.still_working ? 'Present (1y 1m)' : experience.retirement_year}
          {' • '}
          {experience?.location}
        </h5>
      </div>
      <p className="w-[75%] text-base font-normal leading-[25.6px] text-left mt-4">{experience?.description}</p>
    </div>
    <div className="py-6">
      <div className="w-full h-px bg-[#F5F5F5]" />
    </div>
  </>
)
