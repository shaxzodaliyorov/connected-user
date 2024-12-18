import {Avatar} from '@/components'
import {Education, Kiip, Penalty, Topik} from '@/icons'
import {ProfileProgress} from '../profile-progress'

export const UserSkills = () => (
  <div className=" flex gap-4">
    <div className="w-1/2 border border-[#F5F5F5] p-[15px] rounded-[15px]">
      <Avatar src="https://mighty.tools/mockmind-api/content/human/57.jpg" name="" className="w-[72px] h-[72px]" />
      <div className="py-[18px]">
        <div className="w-full h-[1px] bg-[#F5F5F5]" />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-[14px]">
          <p className="text-sm font-normal leading-[16.94px] text-left text-[#7D7D7D]">Visa status</p>
          <h4 className=" text-sm font-semibold leading-[16.94px] text-left text-[#0C0C0C]">E-7</h4>
        </div>
        <div className="flex flex-col gap-y-[14px]">
          <p className="text-sm font-normal leading-[16.94px] text-left text-[#7D7D7D]">Visa expiry date</p>
          <h4 className=" text-sm font-semibold leading-[16.94px] text-left text-[#0C0C0C]">
            -120 <span className="text-sm font-normal leading-[16.94px] text-left text-[#7D7D7D]">days</span> 13
            <span className="text-sm font-normal leading-[16.94px] text-left text-[#7D7D7D]"> hours</span>
          </h4>
        </div>
      </div>
    </div>
    <div className="w-1/2 flex flex-wrap gap-4">
      <div className="w-[45%] border border-[#F5F5F5] p-[14px] rounded-[8px]">
        <h3 className="flex gap-[6px] items-center text-sm font-normal leading-[16.94px] text-left">
          Education <Education className="text-[#12B76A]" />
        </h3>
        <ProfileProgress progress="80%" />
      </div>
      <div className="w-[45%] border border-[#F5F5F5] p-[14px] rounded-[8px]">
        <h3 className="flex gap-[6px] items-center text-sm font-normal leading-[16.94px] text-left">
          KIIP <Kiip className="text-[#12B76A]" />
        </h3>
        <ProfileProgress progress="80%" />
      </div>
      <div className="w-[45%] border border-[#F5F5F5] p-[14px] rounded-[8px]">
        <h3 className="flex gap-[6px] items-center text-sm font-normal leading-[16.94px] text-left">
          Topik <Topik className="text-[#12B76A]" />
        </h3>
        <ProfileProgress progress="80%" />
      </div>
      <div className="w-[45%] border border-[#F5F5F5] p-[14px] rounded-[8px]">
        <h3 className="flex gap-[6px] items-center text-sm font-normal leading-[16.94px] text-left">
          Penalty <Penalty className="text-[#12B76A]" />
        </h3>
        <ProfileProgress progress="100%" />
      </div>
    </div>
  </div>
)
