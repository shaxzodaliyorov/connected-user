import {IoMdMore} from 'react-icons/io'
import {MainCard} from '../main-card'
import {Props} from './types'

export const Resume: React.FC<Props> = ({title, img, status, update, views, seen, offers, matchUp}) => (
  <div className="w-full pt-4">
    <MainCard>
      <div className="flex justify-between items-start">
        <div className="flex gap-5">
          <div className="relative">
            <img className="w-20 h-20 rounded-full" src={img} alt="" />
            <div className="px-2 py-1 rounded-[31px] border-[#12B76A] border text-center bg-white absolute top-[69px] left-4">
              {status}
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
          <div className="flex gap-2">
            <div className="flex gap-2">
              <span className="text-base font-normal leading-6 text-left text-[#0C0C0C]">{views}</span>
              <span className="text-base font-normal leading-6 text-left text-[#7D7D7D]">views |</span>
            </div>
            <div className="flex gap-2">
              <span className="text-base font-normal leading-6 text-left text-[#0C0C0C]">{seen}</span>
              <span className="text-base font-normal leading-6 text-left text-[#7D7D7D]">seen |</span>
            </div>
            <div className="flex gap-2">
              <span className="text-base font-normal leading-6 text-left text-[#0C0C0C]">{offers}</span>
              <span className="text-base font-normal leading-6 text-left text-[#7D7D7D]">offers |</span>
            </div>
            <div className="flex gap-2">
              <span className="text-base font-normal leading-6 text-left text-[#0C0C0C]">{matchUp}</span>
              <span className="text-base font-normal leading-6 text-left text-[#7D7D7D]">match up</span>
            </div>
          </div>
        </div>
      </div>
    </MainCard>
  </div>
)
