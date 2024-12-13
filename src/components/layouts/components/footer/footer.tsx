import {FOOTER_LINKS} from '@/constants'
import {FOOTER_SOCIAL_LINKS} from '@/constants/footer'
import {FooterPhone, Location} from '@/icons'
import {Link} from 'react-router-dom'

export const Footer = () => (
  <section className="w-full pt-[120px]">
    <footer className="w-full container flex justify-between bg-white rounded-[15px] p-[30px]">
      <div className="flex flex-col justify-between">
        <img src="/images/logo.svg" alt="" className="w-[195px] h-[50px]" />
        <div className="pt-[98px]">
          <div className="flex  gap-3">
            <Location className="mt-1 text-[#C5C5C5]" />
            <p className="w-[55%] text-base font-normal text-[#0C0C0C] leading-[22.4px] text-left">
              (38511) 401, SD twintower, 367, Daehak-ro, Amnyang-eup, Gyeongsan-si, Gyeongsangbuk-do, Republic of Korea
            </p>
          </div>
          <div className="flex gap-3 items-center pt-8 w-[55%]">
            <div className="flex gap-3 items-center">
              <FooterPhone className="text-[#C5C5C5]" />
              <p className="text-base font-normal leading-[17.6px] text-left text-[#0C0C0C]">053-813-1027</p>
            </div>
            <div className="flex gap-3 items-center ">
              <FooterPhone className="text-[#C5C5C5]" />
              <p className="text-base font-normal leading-[17.6px] text-left text-[#0C0C0C]">053-813-1027</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex gap-4 flex-col">
            {FOOTER_LINKS.map((link, index) => (
              <Link key={index} to={link.url} className="text-base font-normal leading-6 text-left text-[#0C0C0C]">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-4 flex-col">
            {FOOTER_SOCIAL_LINKS.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                className="text-base font-normal leading-6 text-left text-[#0C0C0C] flex items-center gap-1"
              >
                <span className="">{link.icons}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="pt-[52px]">
          <p className="text-base font-normal leading-6 text-left text-[#7D7D7D]">
            Copyright © 2024 • URconnection lc.
          </p>
        </div>
      </div>
    </footer>
  </section>
)
