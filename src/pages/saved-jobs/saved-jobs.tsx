import {JobCard} from '@/components'
import {Loader} from '@/components/loader'
import {useGetSavedJobsQuery} from '@/features/jobs'

import {MdOutlineArrowBackIos} from 'react-icons/md'
import {Link} from 'react-router-dom'

export const SavedJobs = () => {
  const {data: {data: savedJobs = []} = {}, isLoading} = useGetSavedJobsQuery('')

  return (
    <section className="w-full">
      {isLoading ? (
        <div className="w-full container">
          <Loader className="h-80" />
        </div>
      ) : (
        <div className="w-full container">
          <div className="py-6">
            <Link to="/" className="flex items-center gap-x-2">
              <span>
                <MdOutlineArrowBackIos />
              </span>
              Back
            </Link>
            <div className="py-4">
              <h1 className="text-[32px] font-medium leading-[38.72px] text-left text-[#0C0C0C]">Saved Jobs</h1>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {savedJobs?.map((jobItem, index) => (
              <JobCard
                key={index}
                id={jobItem?.job?._id}
                location={jobItem.job?.location}
                type_of_employment={jobItem?.job?.type_of_employment}
                company={jobItem.company?.company_name as string}
                job_title={jobItem?.job?.job_title}
                logo={jobItem?.company?.logo}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
