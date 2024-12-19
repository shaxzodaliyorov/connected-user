import {Avatar, Button} from '@/components'
import {MainCard} from '@/components/main-card'
import {AddResume, CurrentVisa, Download, Experiance, Gmail, Location, Pencil} from '@/icons'
import {Languages} from '@/icons/languages'
import {Phone} from '@/icons/phone'
import {FaInstagram} from 'react-icons/fa'
import {IoIosGlobe} from 'react-icons/io'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import {TfiTwitter} from 'react-icons/tfi'
import {Link} from 'react-router-dom'

export const ResumeDetails = () => (
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
      <div className="w-full">
        <div className="relative">
          <img src="http://surl.li/gtmuxp" className="rounded-t-[15px] bg-center w-full h-[200px]" alt="" />
          <div className="absolute top-[20px] right-[20px] p-[10px] bg-[#FFFFFF] rounded-full text-[#0062FF]">
            <Pencil />
          </div>
          <div className="border-[3px] border-[#FFFFFF] absolute top-[100px] left-[30px] rounded-full">
            <Avatar
              name="Abdullah"
              src="https://mighty.tools/mockmind-api/content/human/57.jpg"
              className="w-[140px] h-[140px] "
            />
          </div>
        </div>
        <div className="px-[30px] py-6 bg-[#FFFFFF] rounded-b-[15px]">
          <div className="flex justify-between relative">
            <div className="flex flex-col">
              <h3 className="text-2xl font-medium leading-9 mt-8 text-left">Jomes Jonathan Smithson</h3>
              <p className="text-base font-normal leading-6 text-left text-[#0C0C0C]">Product Designer </p>
            </div>
            <div className="absolute -top-[20px] -right-px p-[10px] bg-[#FFFFFF] rounded-full text-[#0062FF]">
              <Pencil />
            </div>
            <div className="flex gap-x-2 items-center mt-[17px] mr-4">
              <Location className="text-[#737373]" />
              <p className="text-base font-normal text-[#0C0C0C] leading-6 text-left">Gangnam, South Korea</p>
            </div>
          </div>
          <div className="flex gap-x-4 mt-4">
            <div className="w-1/3 bg-[#FAFAFA] p-5 rounded-[15px] flex flex-col gap-y-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-1">
                  <CurrentVisa className="text-[#737373]" />
                  <p className="text-sm font-normal leading-[22.4px] text-left text-[#737373]">Current Visa</p>
                </div>
                <h4 className="text-base font-normal leading-[25.6px] text-center text-[#0C0C0C]">D10</h4>
              </div>
              <div className="w-full h-px bg-[#FFFFFF] " />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-1">
                  <Gmail className="text-[#737373]" />
                  <p className="text-sm font-normal leading-[22.4px] text-left text-[#737373]">Email</p>
                </div>
                <h4 className="text-base font-normal leading-[25.6px] text-center text-[#0C0C0C]">
                  jakegyll@email.com
                </h4>
              </div>
              <div className="w-full h-px bg-[#FFFFFF] " />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-1">
                  <Phone className="text-[#737373] w-[18px] h-[18px]" />
                  <p className="text-sm font-normal leading-[22.4px] text-left ml-[1px] text-[#737373]">Phone</p>
                </div>
                <h4 className="text-base font-normal leading-[25.6px] text-center text-[#0C0C0C]">+82 1245 572 135</h4>
              </div>
            </div>
            <div className="w-2/3 bg-[#FAFAFA] p-5 rounded-[15px] flex flex-col gap-y-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-1">
                  <Languages className="text-[#737373]" />
                  <p className="text-sm font-normal leading-[22.4px] text-left text-[#737373]">Languages</p>
                </div>
                <div className="flex gap-x-[6px]">
                  <p className="px-[10px] py-px bg-[#FFFFFF] rounded-[33px]">English • B1</p>
                  <p className="px-[10px] py-px bg-[#FFFFFF] rounded-[33px]">Korean • 3</p>
                </div>
              </div>
              <div className="w-full h-px bg-[#FFFFFF] " />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-1">
                  <img src="http://surl.li/iigizw" className="text-[#737373]  w-[18px] h-[18px]" />
                  <p className="text-sm font-normal leading-[22.4px] text-left text-[#737373]">Expected Salary</p>
                </div>
                <h4 className="text-base font-normal leading-[25.6px] text-center text-[#0C0C0C]">
                  2.500.000 - 3,000,000 won
                </h4>
              </div>
              <div className="w-full h-px bg-[#FFFFFF] " />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-1">
                  <Experiance className="text-[#737373]" />
                  <p className="text-sm font-normal leading-[22.4px] text-left text-[#737373]">Working Experiance</p>
                </div>
                <h4 className="text-base font-normal leading-[25.6px] text-center text-[#0C0C0C]">3 years</h4>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <Button
              variant="secondary"
              className="text-base font-normal leading-[20.8px] text-left rounded-[45px] px-4 py-[10px]"
              rightIcon={<Download className="text-[#0062FF]" />}
            >
              Resume.pdf
            </Button>
            <div className="flex gap-x-2 ">
              <Button
                leftIcon={<FaInstagram />}
                variant="secondary"
                className="text-base font-normal leading-[20.8px] text-left rounded-[45px] px-4 py-[10px] text-[#0C0C0C]"
              >
                Instagram
              </Button>
              <Button
                leftIcon={<TfiTwitter />}
                variant="secondary"
                className="text-base font-normal leading-[20.8px] text-left rounded-[45px] px-4 py-[10px] text-[#0C0C0C]"
              >
                Twitter
              </Button>
              <Button
                leftIcon={<IoIosGlobe />}
                variant="secondary"
                className="text-base font-normal leading-[20.8px] text-left rounded-[45px] px-4 py-[10px] text-[#0C0C0C]"
              >
                www.jomes.com
              </Button>
            </div>
          </div>
        </div>
      </div>
      <MainCard className="mt-4">
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">About Me</h4>
          <div className=" bg-[#FFFFFF] rounded-full text-[#0062FF]">
            <Pencil />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-y-7">
          <p className="w-[84%] text-base font-normal leading-[25.6px] text-left text-[#0C0C0C]">
            I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United
            Kingdom. I’m passionate about designing digital products that have a positive impact on the world.
          </p>
          <p className="w-[84%] text-base font-normal leading-[25.6px] text-left text-[#0C0C0C]">
            For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user
            research and product strategy for product agencies, big tech companies & start-ups.
          </p>
        </div>
      </MainCard>
      <MainCard className="mt-4">
        <div className="flex gap-x-2 items-center">
          <h4 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">Experience</h4>
          <AddResume className="text-[#0062FF]" />
        </div>
        <div className="py-6">
          <div className="w-full h-px bg-[#F5F5F5]" />
        </div>
        <div className=" mt-[6px]">
          <div className="flex justify-between">
            <h5 className="text-xl font-normal leading-[26px] text-left text-[#0C0C0C]">Product Designer</h5>
            <div className=" bg-[#FFFFFF] rounded-full text-[#0062FF]">
              <Pencil />
            </div>
          </div>
          <div className="flex mt-[6px]">
            <h5 className=" text-base font-normal leading-6 text-left">
              Twitter <span className="text-[#C5C5C5]">•</span> Full-Time
            </h5>
          </div>
          <div className="flex mt-[6px]">
            <h5 className="text-sm font-normal leading-[22.4px] text-left text-[#737373]">
              Jun 2019 - Present (1y 1m) <span className="text-[#C5C5C5]">•</span> Gangnam, South Korea
            </h5>
          </div>
          <div className="mt-4">
            <p className="w-[72%] text-base font-normal leading-[25.6px] text-[#0C0C0C] text-left">
              Created and executed social media plan for 10 brands utilizing multiple features and content types to
              increase brand outreach, engagement, and leads.
            </p>
          </div>
        </div>
        <div className="py-6">
          <div className="w-full h-px bg-[#F5F5F5]" />
        </div>
        <div className=" mt-[6px]">
          <div className="flex justify-between">
            <h5 className="text-xl font-normal leading-[26px] text-left text-[#0C0C0C]">Product Designer</h5>
            <div className=" bg-[#FFFFFF] rounded-full text-[#0062FF]">
              <Pencil />
            </div>
          </div>
          <div className="flex mt-[6px]">
            <h5 className=" text-base font-normal leading-6 text-left">
              Twitter <span className="text-[#C5C5C5]">•</span> Full-Time
            </h5>
          </div>
          <div className="flex mt-[6px]">
            <h5 className="text-sm font-normal leading-[22.4px] text-left text-[#737373]">
              Jun 2019 - Present (1y 1m) <span className="text-[#C5C5C5]">•</span> Gangnam, South Korea
            </h5>
          </div>
          <div className="mt-4">
            <p className="w-[72%] text-base font-normal leading-[25.6px] text-[#0C0C0C] text-left">
              Created and executed social media plan for 10 brands utilizing multiple features and content types to
              increase brand outreach, engagement, and leads.
            </p>
          </div>
          <div className="py-6">
            <div className="w-full h-px bg-[#F5F5F5]" />
          </div>
          <Button
            fullWidth
            variant="secondary"
            className="bg-white hover:bg-white text-base font-medium leading-[25.6px] text-center h-5 text-[#0062FF]"
          >
            Show 3 more experiences
          </Button>
        </div>
      </MainCard>
      <MainCard className="mt-4">
        <div className="flex gap-x-2 items-center">
          <h4 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">Educations</h4>
          <AddResume className="text-[#0062FF]" />
        </div>
        <div className="py-6">
          <div className="w-full h-px bg-[#F5F5F5]" />
        </div>
        <div className="mt-[6px]">
          <div className="flex justify-between">
            <h5 className="text-xl font-normal leading-[26px] text-left text-[#0C0C0C]">Shinhan University</h5>
            <div className=" bg-[#FFFFFF] rounded-full text-[#0062FF]">
              <Pencil />
            </div>
          </div>
          <div className="flex mt-[6px] flex-col gap-y-1">
            <p className="text-base font-normal leading-6 text-left text-[#0C0C0C]">
              Postgraduate degree, Applied Psychology
            </p>
            <p className="text-sm font-normal leading-[22.4px] text-left text-[#737373]">2010 - 2012</p>
          </div>
          <p className="text-base font-normal leading-[25.6px] text-left w-[80%] mt-4">
            As an Applied Psychologist in the field of Consumer and Society, I am specialized in creating business
            opportunities by observing, analysing, researching and changing behaviour.
          </p>
        </div>
        <div className="py-6">
          <div className="w-full h-px bg-[#F5F5F5]" />
        </div>
        <div className="mt-[6px]">
          <div className="flex justify-between">
            <h5 className="text-xl font-normal leading-[26px] text-left text-[#0C0C0C]">University of Yongin</h5>
            <div className=" bg-[#FFFFFF] rounded-full text-[#0062FF]">
              <Pencil />
            </div>
          </div>
          <div className="flex mt-[6px] flex-col gap-y-1">
            <p className="text-base font-normal leading-6 text-left text-[#0C0C0C]">
              Bachelor of Arts, Visual Communication
            </p>
            <p className="text-sm font-normal leading-[22.4px] text-left text-[#737373]">2010 - 2012</p>
          </div>
          <p className="text-base font-normal leading-[25.6px] text-left w-[80%] mt-4">
            As an Applied Psychologist in the field of Consumer and Society, I am specialized in creating business
            opportunities by observing, analysing, researching and changing behaviour.
          </p>
        </div>
        <div className="py-6">
          <div className="w-full h-px bg-[#F5F5F5]" />
        </div>
        <Button
          fullWidth
          variant="secondary"
          className="bg-white hover:bg-white text-base font-medium leading-[25.6px] text-center h-5 text-[#0062FF]"
        >
          Show 3 more experiences
        </Button>
      </MainCard>
      <MainCard className="mt-4">
        <div className="flex justify-between">
          <div className="flex gap-x-[10px] items-center">
            <h4 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">Skills</h4>
            <AddResume className="text-[#0062FF]" />
          </div>
          <div className=" bg-[#FFFFFF] rounded-full text-[#0062FF]">
            <Pencil />
          </div>
        </div>
        <div className="flex gap-2 flex-wrap mt-[29px]">
          <p className="py-[6px] px-[10px] bg-[#F5F5F5] rounded-[8px]">Community Manager</p>
          <p className="py-[6px] px-[10px] bg-[#F5F5F5] rounded-[8px]">Communication</p>
          <p className="py-[6px] px-[10px] bg-[#F5F5F5] rounded-[8px]">Facebook Ads</p>
          <p className="py-[6px] px-[10px] bg-[#F5F5F5] rounded-[8px]">Content Planning</p>
          <p className="py-[6px] px-[10px] bg-[#F5F5F5] rounded-[8px]">Analytics</p>
        </div>
      </MainCard>
    </div>
  </section>
)
