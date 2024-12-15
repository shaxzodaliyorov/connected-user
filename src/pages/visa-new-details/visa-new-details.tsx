import {Button} from '@/components/common'
import {VISA_UPDATES} from '@/mock'

export const VisaNewDetails = () => (
    <section className="w-full">
      <div className="w-full container flex justify-between">
        <div className="w-[66%] bg-white p-[30px] rounded-[15px]">
          <div className="flex justify-between">
            <p className="text-sm font-normal leading-[22.4px] text-left text-[#0C0C0C]">Immigration</p>
            <p className="text-sm font-normal leading-[22.4px] text-left text-[#0C0C0C]">Published: Aug 6, 2024</p>
          </div>
          <div className="pt-3">
            <h3 className="text-2xl font-medium leading-9 text-left">
              Recent updates regarding the D-10-1 visa have introduced several significant changes.{' '}
            </h3>
            <div className="pt-6">
              <img
                className="w-[692px] h-80 rounded-[15px]"
                src="https://images2.goabroad.com/image/upload/c_fill,g_faces:auto,fl_progressive,h_900,w_900/v1/images2/program_content/STywqBIAZtTZm8HL6bCQxzsiBPVFgBPgeASFLTxs.jpg"
                alt=""
              />
            </div>
            <div className="pt-[30px]">
              <h4 className="text-xl font-normal leading-[30px] text-left">
                At <span className="text-[#285CAD] font-medium">Connected</span>, we’re constantly striving to improve
                your job search experience. That's why we’ve added new and advanced filters to help you refine your
                search and find the perfect job faster!
              </h4>
            </div>
            <div className="pt-[40px]">
              <h3 className="text-xl font-medium leading-[24.2px] text-left">What’s New?</h3>
              <p className="text-base font-normal leading-[25.6px] text-left">
                Our enhanced job search filters let you:
              </p>
              <ul className="list-disc pl-5  space-y-1">
                <li className="text-base font-normal leading-[25.6px] text-left">
                  Filter by Salary Range: Now you can narrow your search by minimum and maximum salary to match your
                  financial expectations.
                </li>
                <li className="text-base font-normal leading-[25.6px] text-left">
                  Job Type: Filter by full-time, part-time, contract, or freelance positions to find opportunities that
                  suit your lifestyle.
                </li>
                <li className="text-base font-normal leading-[25.6px] text-left">
                  Industry-Specific Filters: Select your preferred industries, from tech and finance to marketing and
                  education.
                </li>
                <li className="text-base font-normal leading-[25.6px] text-left">
                  Location: Focus your search on specific regions, cities, or even districts within South Korea.
                </li>
              </ul>
            </div>
            <div className="pt-[40px]">
              <h3 className="text-xl font-medium leading-[24.2px] text-left">How to Use the New Filters</h3>
              <ul className="list-disc pl-5  space-y-1">
                <li className="text-base font-normal leading-[25.6px] text-left">
                  Log into your account and navigate to the job search page.
                </li>
                <li className="text-base font-normal leading-[25.6px] text-left">
                  On the left side of the screen, you’ll see the new filter options.
                </li>
                <li className="text-base font-normal leading-[25.6px] text-left">
                  Customize your search by selecting the desired criteria and hit "Apply Filters."
                </li>
                <li className="text-base font-normal leading-[25.6px] text-left">
                  Explore jobs that better match your needs!
                </li>
              </ul>
            </div>
            <div className="pt-[40px]">
              <h3 className="text-xl font-medium leading-[24.2px] text-left">What’s Fresh?</h3>
              <ul className="list-disc pl-5  space-y-1">
                <li className="text-base font-normal leading-[25.6px] text-left">
                  With our upgraded job search filters, you can:
                </li>
                <li className="text-base font-normal leading-[25.6px] text-left">
                  - Salary Range: Tailor your search by setting minimum and maximum salary limits to align with your
                  financial goals.
                </li>
                <li className="text-base font-normal leading-[25.6px] text-left">
                  - Job Type: Choose from full-time, part-time, contract, or freelance roles that fit your personal
                  schedule.
                </li>
                <li className="text-base font-normal leading-[25.6px] text-left">
                  - Industry Filters: Pick your favorite sectors, whether it’s technology, finance, marketing, or
                  education.
                </li>
                <li className="text-base font-normal leading-[25.6px] text-left">
                  - Location: Zero in on specific areas, cities, or even neighborhoods across South Korea.
                </li>
              </ul>
            </div>
            <div className="pt-[40px]">
              <h3 className="text-xl font-medium leading-[24.2px] text-left">Utilizing the Latest Filters</h3>
              <ul className="list-disc pl-5  space-y-1">
                <li className="text-base font-normal leading-[25.6px] text-left">
                  Sign in to your account and head over to the job search section.
                </li>
                <li className="text-base font-normal leading-[25.6px] text-left">
                  On the left side of your screen, you’ll find the updated filter options.
                </li>
                <li className="text-base font-normal leading-[25.6px] text-left">
                  Tailor your search by choosing your preferred criteria and click "Apply Filters."
                </li>
                <li className="text-base font-normal leading-[25.6px] text-left">
                  Discover job listings that align more closely with your preferences!
                </li>
              </ul>
            </div>
            <div className="pt-[40px]">
              <h3 className="text-xl font-medium leading-[24.2px] text-left">Why We Made These Updates</h3>
              <p className="text-base font-normal leading-[25.6px] text-left">
                We listened to your feedback! Many users asked for more detailed ways to refine their job searches, and
                we delivered. With these new filters, you’ll save time and find more relevant opportunities that meet
                your professional and personal goals.
              </p>
            </div>
            <div className="pt-[40px]">
              <h3 className="text-xl font-medium leading-[24.2px] text-left">Ready to give it a try? </h3>
            </div>
          </div>
        </div>
        <div className="w-[33%] bg-white p-[30px] rounded-[15px] h-[680px]">
          {VISA_UPDATES.slice(0, 3).map((item, index) => (
            <>
              <div key={index} className="flex gap-[14px]">
                <img className="w-[90px] h-[125px] gap-0 opacity-[0px] rounded-2" src={item.imageUrl} alt="" />
                <div className="flex flex-col">
                  <h4 className="text-[#0C0C0C] font-semibold text-left">{item.title}</h4>
                  <p className="text-[#0b0b0b] mt-2 pb-9  font-normal ">{item.description.slice(0, 50)}</p>
                  <div className="text-[14px] text-gray-500 -mt-4">
                    <span>{item.category}</span> · <span>{item.date}</span>
                  </div>
                </div>
              </div>
              <div className="py-6">
                <div className="w-full h-[1px] bg-[#F3F3F3]" />
              </div>
            </>
          ))}
          <Button
            fullWidth
            variant="outline"
            className="mt-6 px-8 h-12 text-primary border-primary hover:bg-[#f3f3f3] hover:text-primary"
          >
            Show more
          </Button>
        </div>
      </div>
    </section>
  )
