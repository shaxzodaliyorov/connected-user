import {MainCard} from '@/components/main-card'
import {Email} from '@/icons'
import {Clock} from '@/icons/clock'
import {Phone} from '@/icons/phone'

export const ContactInfo = () => (
  <section className="w-full pt-[120px]">
    <MainCard className="container gap-y-9 gap-x-[30px] grid grid-cols-2 ">
      <div>
        <p className=" text-[32px] text-[#0b0b0b]  font-medium leading-[41.60px]">
          <span className="text-[#1289f8]">Contact Info.</span> <br />
          We are always happy to assist you
        </p>
      </div>
      <div className="py-[30px] flex items-center gap-x-4 px-6 bg-[#f3f3f3] rounded-[15px] ">
        <Phone />
        <div>
          <p className="text-[#7d7d7d] text-xl font-normal font-['Inter Display'] leading-loose">Phone Number</p>
          <p className="text-[#0b0b0b] text-xl font-normal font-['Inter Display'] leading-7">(808) 998-34256</p>
        </div>
      </div>
      <div className="py-[30px] gap-x-4  flex items-center px-6 bg-[#f3f3f3] rounded-[15px] ">
        <Email />
        <div>
          <p className="text-[#7d7d7d] text-xl font-normal font-['Inter Display'] leading-loose">Email Address</p>
          <p className="text-[#0b0b0b] text-xl font-normal font-['Inter Display'] leading-7">urconnect@info.com</p>
        </div>
      </div>
      <div className="py-[30px] gap-x-4  flex items-center  px-6 bg-[#f3f3f3] rounded-[15px] ">
        <Clock />
        <div>
          <p className="text-[#7d7d7d] text-xl font-normal font-['Inter Display'] leading-loose">Assistance hours</p>
          <p className="text-[#0b0b0b] text-xl font-normal font-['Inter Display'] leading-7">
            Monday - Friday 6 am to 8 pm KR
          </p>
        </div>
      </div>
    </MainCard>
  </section>
)
