import {FC} from 'react'
import {CardProps} from './types'
import {FillLike, Like, Location, Portfolio} from '@/icons'
import {cn} from '@/lib/utils'
import {useGetSaveJobIdsQuery} from '@/features/jobs'

export const Card: FC<CardProps> = ({
  className,
  company,
  title,
  location,
  salary_max,
  salary_min,
  type_of_employment,
  id,
  onSaveClick,
}) => {
  const {data: {data: saveJobIds = []} = {}} = useGetSaveJobIdsQuery('')

  return (
    <div className={cn('bg-white p-5 h-[284px] w-[272px] rounded-[15px] relative shadow', className)}>
      <div className="w-full">
        <div className="h-[113px]">
          <p className="text-[#0b0b0b] text-xl font-normal  line-clamp-3 font-['Inter Display'] leading-7">{title}</p>
          <p className="text-[#0062ff] text-base font-normal font-['Inter Display'] leading-[17.60px]">
            {salary_min?.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}{' '}
            -{' '}
            {salary_max?.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </p>
        </div>
        <div>
          <p className="text-[#7d7d7d] text-sm flex items-center gap-x-1 font-normal font-['Inter Display'] leading-[16.80px]">
            <Location /> {location || '---'}
          </p>
          <p className="text-[#7d7d7d] text-sm flex items-center gap-x-1 font-normal font-['Inter Display'] leading-[16.80px]">
            <Portfolio /> {type_of_employment}
          </p>
        </div>
      </div>
      <div className="flex absolute mt-2.5 bottom-[23px] left-0 px-[23px] justify-between w-full">
        <div className="flex items-center gap-x-3">
          <img
            className="rounded-xl border overflow-hidden border-neutral-100 w-[41.40px] h-[41.40px]"
            src={company?.logo}
            alt=""
          />
          <div>
            <p className="text-[#0b0b0b] text-sm font-medium font-['Inter Display'] leading-[21px]">
              {company?.company_name}
            </p>
            {/* <p className="text-[#0b0b0b] text-sm font-medium font-['Inter Display'] leading-[21px]">{company?.name}</p> */}
          </div>
        </div>
        <button onClick={onSaveClick}>
          {saveJobIds && saveJobIds.includes(id as string) ? <FillLike /> : <Like />}
        </button>
      </div>
    </div>
  )
}
