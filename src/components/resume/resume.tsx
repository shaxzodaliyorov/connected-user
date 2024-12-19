import {IoMdMore} from 'react-icons/io'
import {MainCard} from '../main-card'
import {Props} from './types'

export const Resume: React.FC<Props> = ({title, img, status, update, views, seen, offers, matchUp, onclick}) => (
  <div onClick={onclick} className="w-full">
    <MainCard>
      <div className="flex justify-between items-start">
        <div className="flex gap-5">
          <div className="relative">
            <img className="w-20 h-20 rounded-full" src={img} alt="" />
            <div className="px-2 py-1 rounded-[31px] border-[#12B76A] border text-center bg-white absolute top-[69px] left-4">
              <p className="text-[#12b669] text-xs font-semibold font-['Inter Display']"> {status}</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium leading-[22px] text-left">{title}</h3>
            <div className="pt-2">
              <p className=" text-base font-normal leading-6 text-left text-[#7D7D7D]">Updated on {update}</p>
            </div>
          </div>
        </div>
        <IoMdMore className="text-[25px]" />
      </div>
      <div className="pt-12">
        <div className="w-full rounded-xl flex justify-between bg-[#FAFAFA] p-5">
          <h4 className=" text-base font-normal leading-[20.8px] text-left text-[#0C0C0C]">Statistics for the week</h4>
          <div className="flex gap-x-6 ">
            <div className="flex  gap-x-[6px] ">
              <span className="text-base font-normal leading-6 text-left text-[#0C0C0C]">{views}</span>
              <span className="text-neutral-500 text-sm font-normal font-['Inter Display'] leading-[21px]">views</span>
            </div>
            <div className="w-px h h-6 bg-[#C5C5C5]" />
            <div
              className="flex 
            
            gap-x-[6px] "
            >
              <span className="text-base font-normal leading-6 text-left text-[#0C0C0C]">{seen}</span>
              <span className="text-neutral-500 text-sm font-normal font-['Inter Display'] leading-[21px]">seen</span>
            </div>
            <div className="w-px h h-6 bg-[#C5C5C5]" />
            <div className="flex  gap-x-[6px] ">
              <span className="text-base font-normal leading-6 text-left text-[#0C0C0C]">{offers}</span>
              <span className="text-neutral-500 text-sm font-normal font-['Inter Display'] leading-[21px]">offers</span>
            </div>
            <div className="w-px h h-6 bg-[#C5C5C5]" />
            <div className="flex  gap-x-[6px] ">
              <span className="text-base font-normal leading-6 text-left text-[#0C0C0C]">{matchUp}</span>
              <span className="text-neutral-500 text-sm font-normal font-['Inter Display'] leading-[21px]">
                match up
              </span>
            </div>
          </div>
        </div>
      </div>
    </MainCard>
  </div>
)
