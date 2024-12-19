import {Resume} from '@/components'
import {AddResume, Transition, UserIcons, WarningIcon} from '@/icons'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import {Link, useNavigate} from 'react-router-dom'

export const MyResume = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full">
      <div className="w-full container">
        <div className="py-6 w-[70%] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-x-2">
            <span>
              <MdOutlineArrowBackIos />
            </span>
            Back
          </Link>
          <button className="flex items-center text-base font-medium leading-5 text-left gap-[6px] text-[#0062FF] mr-6">
            <AddResume />
            Add Resume
          </button>
        </div>
        <div className="w-full flex gap-4 items-start">
          <div className="w-[80%]">
            <div className="flex flex-col gap-y-4">
              <Resume
                onclick={() => navigate('/my-resume/1')}
                title="Frontend Developer (React, React Native, Nextjs)"
                img="https://mighty.tools/mockmind-api/content/human/57.jpg"
                status="91%"
                update="20.09.2024"
                views="12"
                seen="12"
                offers="12"
                matchUp="12"
              />
              <Resume
                onclick={() => navigate('/my-resume/1')}
                title="Frontend Developer (React, React Native, Nextjs)"
                img="https://mighty.tools/mockmind-api/content/human/57.jpg"
                status="91%"
                update="20.09.2024"
                views="12"
                seen="12"
                offers="12"
                matchUp="12"
              />
            </div>
          </div>

          <div className="w-[35%] p-5 bg-white rounded-[15px] h-[187px]">
            <WarningIcon className="text-[#F79009]" />
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-[10px]">
                <Transition className="text-[#C5C5C5] text-xl" />
                <p className="text-base font-normal leading-[20.8px] text-left w-[70%]">
                  You can only make one resume public.
                </p>
              </div>{' '}
              <div className="flex items-center gap-[10px]">
                <UserIcons className="text-[#C5C5C5] text-base" />
                <p className="text-base font-normal leading-[20.8px] text-left">You can register up to 15 resumes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
