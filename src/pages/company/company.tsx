import {MainCard} from '@/components/main-card'
import {Employees, Industry} from '@/icons'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {Button, JobCard} from '@/components'

export const Company = () => (
  <section className="w-full">
    <div className="w-full container">
      <div className="py-6">
        <Link to="/" className="flex items-center gap-x-2">
          <span>
            <MdOutlineArrowBackIos />
          </span>
          Back
        </Link>
      </div>
      <div className="py-4">
        <div className="w-full rounded-[15px] bg-white">
          <div className="relative">
            <img
              className="w-full h-[260px] rounded-t-[15px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yJ_dCbTvBuhYHqXuwsHzzUSmGA6JSwx0VQ&s"
              alt=""
            />
            <div className="absolute left-[30px] top-[190px] shadow-[0px_4px_20px_0px_#A8A7A540] rounded-[20px] p-[5px] bg-white">
              <img
                width={100}
                height={100}
                src="https://t4.ftcdn.net/jpg/00/29/82/81/360_F_29828143_RkHCM5hFK8ZcuT35xrAOYVAsNFIQ6MHN.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="pt-5">
            <MainCard className="flex justify-between ">
              <div>
                <h3 className="text-2xl font-medium leading-[29.04px] text-left text-[#0C0C0C]">Samsung</h3>
                <div className="pt-2">
                  <p className="text-[16px] font-medium leading-[25.6px] text-left">
                    <span className="text-[#7D7D7D]">Founded</span> <span className="text-[#7D7D7D]">•</span>{' '}
                    <span className="text-[#0C0C0C]">July 31, 2011</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="py-[10px] pl-4 pr-[89px] bg-[#FAFAFA] rounded-[8px]">
                  <div className="flex items-center gap-2">
                    <Employees />
                    <p>Employees</p>
                  </div>
                  <div className="ppt-2">
                    <p className="text-[16px] font-semibold leading-[25.6px] text-left">4000+</p>
                  </div>
                </div>
                <div className="py-[10px] pl-4 pr-[89px] bg-[#FAFAFA] rounded-[8px]">
                  <div className="flex items-center gap-2">
                    <Industry />
                    <p>Industry</p>
                  </div>
                  <div className="ppt-2">
                    <p className="text-[16px] font-semibold leading-[25.6px] text-left">Social & Non-Profit</p>
                  </div>
                </div>
              </div>
            </MainCard>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <MainCard>
          <h5 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">About Company</h5>
          <div className="pt-4">
            <p className="text-[16px] font-normal leading-[25.6px] text-left text-[#0C0C0C]">
              Samsung is a global leader in technology, renowned for its innovative products and solutions across
              various sectors. Founded in 1938, the company has evolved from a small trading firm into a powerhouse in
              electronics, telecommunications, and consumer goods. Samsung's diverse portfolio includes smartphones,
              televisions, home appliances, and cutting-edge semiconductor technology. With a commitment to quality and
              sustainability, Samsung continues to shape the future of technology, enhancing the lives of millions
              around the world.
            </p>
          </div>
          <div className="pt-8">
            <p className="text-[16px] font-normal leading-[25.6px] text-left text-[#0C0C0C]">
              In recent years, the company has also made significant strides in artificial intelligence and smart home
              technologies, aiming to create a more connected and efficient living environment. Their dedication to
              research and development has led to groundbreaking advancements, such as foldable screens and 5G
              connectivity, positioning Samsung at the forefront of the tech industry.
            </p>
          </div>
          <div className="pt-8">
            <p className="text-[16px] font-normal leading-[25.6px] text-left text-[#0C0C0C]">
              As they look to the future, Samsung remains focused on innovation, customer satisfaction, and
              environmental responsibility, ensuring they not only meet the needs of today but also pave the way for a
              sustainable tomorrow.
            </p>
          </div>
        </MainCard>
        <MainCard>
          <h5 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">Working at URconnection</h5>
          <div className="flex justify-between gap-3 items-center pt-4">
            <img className="w-[412px] h-[372px] rounded-[15px] " src="https://bit.ly/4ghxuET" alt="" />
            <div className="flex flex-col gap-3">
              <img
                className="w-80 h-[180px] gap-0 opacity-[0px] rounded-[15px] left-[606px] top-[1037px]"
                src="https://bit.ly/4ghxuET"
                alt=""
              />
              <img
                className="w-80 h-[180px] gap-0 opacity-[0px] rounded-[15px] left-[606px] top-[1037px]"
                src="https://bit.ly/4ghxuET"
                alt=""
              />
            </div>{' '}
            <div className="flex flex-col gap-3">
              <img
                className="w-80 h-[180px] gap-0 opacity-[0px] rounded-[15px] left-[606px] top-[1037px]"
                src="https://bit.ly/4ghxuET"
                alt=""
              />
              <img
                className="w-80 h-[180px] gap-0 opacity-[0px] rounded-[15px] left-[606px] top-[1037px]"
                src="https://bit.ly/4ghxuET"
                alt=""
              />
            </div>
          </div>
        </MainCard>
        <MainCard>
          <h5 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">About Company</h5>
          <div className="flex justify-between items-center pt-4">
            <p className="text-[16px] text-[#0C0C0C] font-normal leading-[25.6px] text-left">Gangnam-gu, Seoul</p>
            <Link className="text-[#0062FF] text-[16px] font-medium leading-[25.6px] text-left" to={'/'}>
              View map
            </Link>
          </div>
        </MainCard>
      </div>
      <div className="pt-[120px]">
        <h5 className="text-2xl font-medium leading-[29.04px] text-left items-center">
          See Vacancies <span className="text-[#7D7D7D]">• 17</span>
        </h5>
        <div className="flex flex-col gap-4 pt-4">
          {new Array(4).fill(' ').map((_, index) => (
            <JobCard key={index} />
          ))}
          <Button variant="outline">Show more</Button>
        </div>
      </div>
    </div>
  </section>
)
