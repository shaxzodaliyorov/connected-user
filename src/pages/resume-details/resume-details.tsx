/* eslint-disable @typescript-eslint/no-unused-vars */
import {MdOutlineArrowBackIos} from 'react-icons/md'
import {Link, useParams} from 'react-router-dom'
import {AboutMe, Educations, Experiences, MyResume, Skills} from './components'
import {useGetResumeQuery} from '@/features/resume/resume'
import {Resume} from '@/types'
import {Loader} from '@/components/loader'

export const ResumeDetails = () => {
  const {id} = useParams()
  const {data: {data: resume} = {}, isLoading} = useGetResumeQuery(id as string)

  return (
    <>
      {isLoading ? (
        <Loader className="h-80 flex items-center justify-center" />
      ) : (
        <section className="w-full">
          <div className="w-full container">
            <div className="py-6">
              <Link to="/my-resume" className="flex items-center gap-x-2">
                <span>
                  <MdOutlineArrowBackIos />
                </span>
                Back
              </Link>
            </div>
            <MyResume resume={resume as Resume} />
            <AboutMe resume={resume as Resume} />
            <Experiences resume={resume as Resume} />
            <Educations resume={resume as Resume} />
            <Skills resume={resume as Resume} />
          </div>
        </section>
      )}
    </>
  )
}
