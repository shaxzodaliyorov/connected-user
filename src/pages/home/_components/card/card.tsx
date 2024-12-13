import {FC} from 'react'
import {CardProps} from './types'
import {Like, Location, Portfolio} from '@/icons'

export const Card: FC<Partial<CardProps>> = () => (
  <div className="bg-white p-5 h-[284px] w-[272px] rounded-[15px] shadow">
    <div className="w-full">
      <div className="h-[113px]">
        <p className="text-[#0b0b0b] text-xl font-normal  line-clamp-3 font-['Inter Display'] leading-7">
          Middle Graphic Designer
        </p>
        <p className="text-[#0062ff] text-base font-normal font-['Inter Display'] leading-[17.60px]">$125K - $140K</p>
      </div>
      <div>
        <p className="text-[#7d7d7d] text-sm flex items-center gap-x-1 font-normal font-['Inter Display'] leading-[16.80px]">
          <Location /> Jung-gu, Seoul
        </p>
        <p className="text-[#7d7d7d] text-sm flex items-center gap-x-1 font-normal font-['Inter Display'] leading-[16.80px]">
          <Portfolio /> Remote
        </p>
      </div>
    </div>
    <div className="flex absolute mt-2.5 bottom-[23px] left-0 px-[23px] justify-between w-full">
      <div className="flex items-center gap-x-3">
        <img
          className="rounded-xl border overflow-hidden border-neutral-100 w-[41.40px] h-[41.40px]"
          src="/images/company-logo.png"
          alt=""
        />
        <div>
          <p className="text-[#0b0b0b] text-sm font-medium font-['Inter Display'] leading-[21px]">Samsung</p>
          <p className="text-[#0b0b0b] text-sm font-medium font-['Inter Display'] leading-[21px]">Electronics</p>
        </div>
      </div>
      <button>
        <Like />
      </button>
    </div>
  </div>
)
