import {MainCard} from '@/components/main-card'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import {Link} from 'react-router-dom'

export const NotificationDetails = () => (
  <section className="w-full">
    <div className="w-full container">
      <div className="py-6">
        <Link to="/notifications" className="flex items-center gap-x-2">
          <span>
            <MdOutlineArrowBackIos />
          </span>
          Back
        </Link>
      </div>
      <MainCard>
        <h1 className="text-[32px] font-medium text-left">
          Blog Post Title: Discover Our Enhanced Job Search Filters!
        </h1>
        <div className="py-4">
          <p className="text-[16px] font-normal text-[#7D7D7D] text-left ">Published on: 2024.08.06</p>
        </div>
        <div className="py-4">
          <p className="text-xl font-normal text-left text-[#0C0C0C]">
            At Connected, we’re constantly striving to improve your job search experience. That's why we’ve added new
            and advanced filters to help you refine your search and find the perfect job faster!
          </p>
        </div>
      </MainCard>
    </div>
  </section>
)
