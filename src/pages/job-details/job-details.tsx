import {Button} from '@/components/common'
import {
  Bachelor,
  Certiƒicate,
  Commuter,
  Experience,
  GiveBack,
  Healthcare,
  Like,
  SkillDev,
  Summits,
  Unlimited,
  Working,
} from '@/icons'

import {Notes} from './components'
import {Link, useNavigate} from 'react-router-dom'

const STEP = [
  {
    title: 'step 1',
    content: 'Document screening',
  },
  {
    title: 'step 2',
    content: 'First interview',
  },
  {
    title: 'step 3',
    content: 'Second interview',
  },
  {
    title: 'step 4',
    content: 'Final pass',
  },
]

export const JobDetails = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full">
      <div className="w-full container flex gap-4">
        <div className="w-2/3 flex flex-col gap-4 ">
          <div className=" w-full p-[30px] bg-white rounded-[15px]">
            <div className=" flex justify-between gap-4">
              <h1 className="text-2xl font-medium leading-[29.04px] text-left">UX/UI Designer </h1>
              <div className="flex gap-6 items-center">
                <button>
                  <Like />
                </button>
                <Button className="h-9" variant="primary">
                  Apply
                </Button>
              </div>
            </div>
            <div className="py-6">
              <div className="w-full h-[1px] bg-[#D9D9D9]" />
            </div>
            <div className="flex justify-between gap-10">
              <div className="w-2/3 flex flex-col">
                <div className="flex justify-between items-center">
                  <h5 className="text-sm font-medium leading-[22.4px] text-left text-[#7D7D7D]">Type of work</h5>
                  <h4 className="text-base font-semibold leading-[22.4px] text-right text-[#0C0C0C]">Service</h4>
                </div>
                <div className="flex justify-between pt-2 items-center">
                  <h5 className="text-sm font-medium leading-[22.4px] text-left text-[#7D7D7D]">Employment Type</h5>
                  <h4 className="text-base font-semibold leading-[22.4px] text-right text-[#0C0C0C]">Part-time</h4>
                </div>
                <div className="flex justify-between pt-2 items-center">
                  <h5 className="text-sm font-medium leading-[22.4px] text-left text-[#7D7D7D]">Working Hours</h5>
                  <h4 className="text-base font-semibold leading-[22.4px] text-right text-[#0C0C0C]">07:00-13:00</h4>
                </div>
              </div>
              <div className="w-0/3">
                <div className="w-[1px] h-[82px] bg-[#D9D9D9]" />
              </div>
              <div className="w-2/3">
                <div className="flex justify-between items-center">
                  <h5 className="text-sm font-medium leading-[22.4px] text-left text-[#7D7D7D]">Type of work</h5>
                  <h4 className="text-base font-semibold leading-[22.4px] text-right text-[#0C0C0C]">Service</h4>
                </div>
                <div className="flex justify-between pt-2 items-center">
                  <h5 className="text-sm font-medium leading-[22.4px] text-left text-[#7D7D7D]">Employment Type</h5>
                  <h4 className="text-base font-semibold leading-[22.4px] text-right text-[#0C0C0C]">Part-time</h4>
                </div>
                <div className="flex justify-between pt-2 items-center">
                  <h5 className="text-sm font-medium leading-[22.4px] text-left text-[#7D7D7D]">Working Hours</h5>
                  <h4 className="text-base font-semibold leading-[22.4px] text-right text-[#0C0C0C]">07:00-13:00</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-[30px] bg-white rounded-[15px]">
            <h1 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">Company Introduction</h1>
            <div className="pt-4">
              <p className="text-[16px] font-normal leading-[25.6px] text-left text-[#0C0C0C]">
                Imagoworks is a company specializing in AI-based digital dentistry. As an official spin-off company of
                the Korea Institute of Science and Technology, we aim to innovate the digital dentistry and medical AI
                fields based on our accumulated 3D shape model processing, AI, and cloud-based medical software
                technologies in the medical imaging field for many years. We are looking for new members to grow with
                Imagoworks, which has secured world-class 3D shape model processing and AI technologies!
              </p>
            </div>
            <div className="pt-9 flex gap-3">
              <img src="../images/jobs-details.png" alt="" />
              <div className="flex flex-col gap-3">
                <img src="../images/jobs-details.png" alt="" />
                <img src="../images/jobs-details.png" alt="" />
              </div>
            </div>
            <div className="pt-9">
              <h3 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">Responsibilities</h3>
              <div className="pt-4">
                <ul className="list-disc pl-5">
                  <li className="text-[16px] font-normal leading-[25.6px] text-left text-[#0C0C0C]">
                    Leading the Data Pipeline Team for Artificial Intelligence
                  </li>
                  <li className="text-[16px] font-normal leading-[25.6px] text-left text-[#0C0C0C]">
                    Development of an automatic labeling system using AI
                  </li>
                  <li className="text-[16px] font-normal leading-[25.6px] text-left text-[#0C0C0C]">
                    Development of Data Farm, an in-house platform for managing data
                  </li>
                  <li className="text-[16px] font-normal leading-[25.6px] text-left text-[#0C0C0C]">
                    Stay on top of trends on social media platforms, and suggest content ideas to the team
                  </li>
                  <li className="text-[16px] font-normal leading-[25.6px] text-left text-[#0C0C0C]">
                    Engage with online communities
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-9">
              <h3 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">Benefits</h3>
              <div className="flex gap-40 pt-4">
                <div className="flex flex-col gap-y-3">
                  <div className="flex gap-3 items-center">
                    <Healthcare className="text-[#1289F8]" /> Full Healthcare
                  </div>
                  <div className="flex gap-3 items-center">
                    <Summits className="text-[#1289F8]" /> Team Summits
                  </div>
                  <div className="flex gap-3 items-center">
                    <Working className="text-[#1289F8]" /> Remote Working
                  </div>
                  <div className="flex gap-3 items-center">
                    <GiveBack className="text-[#1289F8]" /> We give back
                  </div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <div className="flex gap-3 items-center">
                    <SkillDev className="text-[#1289F8]" /> Skill Development
                  </div>
                  <div className="flex gap-3 items-center">
                    <Unlimited className="text-[#1289F8]" /> Unlimited Vacation
                  </div>
                  <div className="flex gap-3 items-center">
                    <Commuter className="text-[#1289F8]" /> Commuter Benefits
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-9">
              <h3 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">Qualifications</h3>
              <div className="flex flex-col gap-y-3 pt-4">
                <div className="flex gap-3 items-center">
                  <Bachelor className="text-[#1289F8]" /> Bachelor's degree or higher
                </div>
                <div className="flex gap-3 items-center">
                  <Experience className="text-[#1289F8]" /> At least 2 years of experience
                </div>
                <div className="flex gap-3 items-center">
                  <Certiƒicate className="text-[#1289F8]" /> Certiƒicate ( must have)
                </div>
              </div>
            </div>
            <div className="pt-9">
              <h3 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">
                Recruitment and application notes
              </h3>
              <div className="pt-6">
                <Notes steps={STEP} />
              </div>
            </div>
            <div className="pt-9">
              <h3 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">Information</h3>
              <h4 className="text-[16px] font-semibold pt-4 leading-6 text-left">Address</h4>
              <p className="text-base font-normal leading-6 text-left">Gangnam-gu, Seoul</p>
              <Link to="/map" className="text-[#1289F8] font-medium leading-6 text-left">
                View map
              </Link>
              <div className="pt-4 flex flex-col gap-y-1">
                <h4 className="text-[16px] font-semibold leading-6 text-left">Contact</h4>
                <p className="text-base font-normal leading-6 text-left">+82 (10) 123-45-67/ 023-123-456</p>
              </div>
              <div className="pt-4 flex flex-col gap-y-1">
                <h4 className="text-[16px] font-semibold leading-6 text-left">Email</h4>
                <p className="text-base font-normal leading-6 text-left">imagoworks@naver.com</p>
              </div>
            </div>
            <Button variant="primary" className="w-full mt-6">
              Apply
            </Button>
          </div>
          <div className="w-full">
            <div className="py-10">
              <h3 className="text-xl font-semibold leading-[24.2px] text-left">Similar vacancies</h3>
            </div>
            <div className="w-full  flex flex-col gap-4">
              {new Array(3).fill(1).map((_, index) => (
                <div
                  key={index}
                  className="w-full bg-white rounded-[15px] p-[30px] cursor-pointer relative"
                  onClick={() => navigate('/jobs/1')}
                >
                  <div className="flex justify-between ">
                    <div className="flex gap-4 items-center">
                      <img
                        className="w-[60px] h-[60px] rounded-[15px] border-[2px]"
                        src="https://bsmedia.business-standard.com/_media/bs/img/about-page/1562575696.png?im=FitAndFill=(826,465)"
                        alt=""
                      />
                      <div className="flex flex-col">
                        <h4 className="text-xl font-semibold leading-[30px] text-left">Middle UI Designer</h4>
                        <p className="text-base font-normal leading-[19.2px] text-left text-[#7D7D7D]">
                          Samsung <span>·</span>Jung-gu, Seoul <span>·</span>{' '}
                          <span className="text-base font-normal leading-6 text-left text-[#0C0C0C]">
                            $125K - $140K{' '}
                          </span>
                        </p>
                      </div>
                    </div>
                    <button className="absolute z-[9] right-6 top-6 " onClick={() => alert('salom')}>
                      <Like />
                    </button>
                  </div>
                  <div className="pt-4 flex justify-between">
                    <p className="text-base font-normal leading-[19.2px] text-left text-[#7D7D7D]">
                      Experience from 3 to 6 years <span>·</span> D-10 <span>·</span> Full-Time <span>·</span> Remote
                    </p>
                    <p className="text-base font-normal leading-[19.2px] text-left text-[#7D7D7D]">Posted 1 day ago</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className=" px-6 py-2 font-medium">
                Show more
              </Button>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <div className="w-full p-[20px] flex max-h-[80px] items-center gap-4 bg-white rounded-[15px]">
            <img
              className="w-10 h-10 gap-0 opacity-[0px] border-[2px] rounded-full border-[#F5F5F5]"
              src="https://bsmedia.business-standard.com/_media/bs/img/about-page/1562575696.png?im=FitAndFill=(826,465)"
              alt=""
            />
            <span className="text-base font-medium leading-[22.4px] text-left text-[#0C0C0C]">Samsung</span>
          </div>
          <div className="w-full p-[20px] items-center gap-4 bg-white rounded-[15px]">
            <div className="flex justify-between pb-4">
              <h4 className="text-[16px] font-medium leading-5 text-left text-gray-600">Salary</h4>
              <h3 className="text-[16px] font-semibold leading-5 text-left">$125K - $140K</h3>
            </div>
            <div className="w-full h-[1px] bg-[#D9D9D9]" />
            <div className="flex justify-between py-4">
              <h4 className="text-[16px] font-medium leading-5 text-left text-gray-600">Apply Before</h4>
              <h3 className="text-[16px] font-semibold leading-5 text-left">July 31, 2024</h3>
            </div>
            <div className="flex justify-between py-3">
              <h4 className="text-[16px] font-medium leading-5 text-left text-gray-600">Job Posted On</h4>
              <h3 className="text-[16px] font-semibold leading-5 text-left">July 1, 2024</h3>
            </div>
            <div className="flex justify-between py-3">
              <h4 className="text-[16px] font-medium leading-5 text-left text-gray-600">Job Type</h4>
              <h3 className="text-[16px] font-semibold leading-5 text-left">Part-time</h3>
            </div>
            <div className="w-full h-[1px] bg-[#D9D9D9]" />
            <div className="pt-4">
              <h4 className="text-[16px] font-medium leading-5 text-left text-[#0C0C0C]">Visa Accepted</h4>
              <div className="grid grid-cols-2 gap-3 py-3">
                <div className="py-[5px] text-center rounded-[38px] bg-[#FAFAFA]">F2 Residence</div>
                <div className="py-[5px] text-center rounded-[38px] bg-[#FAFAFA]">F2 D2 Study Abroad</div>
                <div className="py-[5px] text-center rounded-[38px] bg-[#FAFAFA]">D4 General Training</div>
                <div className="py-[5px] text-center rounded-[38px] bg-[#FAFAFA]">F4 Oversea Koreans</div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#D9D9D9]" />
            <div className="pt-6">
              <h4 className="text-[16px] font-medium leading-5 text-left text-[#0C0C0C]">Required Skills</h4>
              <div className="grid grid-cols-2 gap-3 py-3">
                <div className="py-[5px] text-center rounded-[38px] bg-[#FAFAFA]">F2 Residence</div>
                <div className="py-[5px] text-center rounded-[38px] bg-[#FAFAFA]">F2 D2 Study Abroad</div>
                <div className="py-[5px] text-center rounded-[38px] bg-[#FAFAFA]">D4 General Training</div>
                <div className="py-[5px] text-center rounded-[38px] bg-[#FAFAFA]">F4 Oversea Koreans</div>
              </div>
              <Button variant="primary" className="w-full mt-6">
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
