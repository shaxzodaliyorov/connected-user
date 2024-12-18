import {GroupRadio, Resume} from '@/components'
import {AddResume} from '@/icons'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import {Link} from 'react-router-dom'

export const MyResume = () => (
  <section className="w-full">
    <div className="w-full container flex gap-4">
      <div className="w-[80%]">
        <div className="py-6 flex justify-between">
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
        <div className="">
          <GroupRadio
            id="r1"
            label={
              <Resume
                title="Frontend Developer (React, React Native, Nextjs)"
                img=""
                status="91%"
                update="20.09.2024"
                views="12"
                seen="12"
                offers="12"
                matchUp="12"
              />
            }
          />
          <GroupRadio
            id="r2"
            label={
              <Resume
                title="Frontend Developer (React, React Native, Nextjs)"
                img=""
                status="91%"
                update="20.09.2024"
                views="12"
                seen="12"
                offers="12"
                matchUp="12"
              />
            }
          />
        </div>
      </div>
      <div className="w-[20%] m-auto">
        <h1 className="text-2xl font-medium leading-[29.04px] text-left text-[#0C0C0C]">My Resume</h1>
      </div>
    </div>
  </section>
)
