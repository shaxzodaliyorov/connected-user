/* eslint-disable @typescript-eslint/no-unused-vars */
import {Button} from '@/components/common'
import {FillLike, Like} from '@/icons'
import {Notes} from './components'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {useGetPublicJobQuery, useGetSaveJobIdsQuery, useLazyGetAllJobsQuery, useSaveJobMutation} from '@/features/jobs'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import dayjs from 'dayjs'
import {useGetUser, useHandleRequest} from '@/hooks'
import {toast} from '@/components/ui/use-toast'
import {useTranslation} from 'react-i18next'
import {BENEFIT, QUALIFICATIONS} from '@/constants/job/job'
import {useEffect, useState} from 'react'
import {JobItem} from '../jobs/_components'
import {Loader} from '@/components/loader'
import {Job} from '@/types'

const STEP = ['Document screening', 'First interview', 'Second interview', 'Final pass']

export const JobDetails = () => {
  const navigate = useNavigate()
  const {data: {data: saveJobIds = []} = {}} = useGetSaveJobIdsQuery('')
  const handleRequest = useHandleRequest()
  const {id} = useParams()
  const {data: {data: job} = {}, isLoading} = useGetPublicJobQuery({id: id!})
  const [saveJob] = useSaveJobMutation()
  const {t} = useTranslation()
  const user = useGetUser()

  const [getAllJobs, {data: {data: jobs = [], next_page} = {}, isLoading: isLoadingJobs, isFetching: isFetchingJobs}] =
    useLazyGetAllJobsQuery()
  const [perPage, setPerPage] = useState(5)

  const fetchJobs = async () => {
    await handleRequest({
      request: async () => {
        const response = await getAllJobs({per_page: perPage}).unwrap()
        return response
      },
    })
  }

  const onSaveAndUnsaved = async () => {
    if (!user) {
      navigate('/sign-in')
      return
    }

    await handleRequest({
      request: async () => {
        const response = await saveJob({
          id: job?._id as string,
          type: saveJobIds.includes(job?._id as string) ? 'unfavorite' : 'favorite',
        })
        return response
      },
      onSuccess: () => {
        toast({title: saveJobIds.includes(job?._id as string) ? t('Job Unsaved') : t('Job Saved'), variant: 'default'})
      },
    })
  }

  useEffect(() => {
    fetchJobs()
  }, [perPage])

  return (
    <section className="w-full">
      <div className="container">
        <div className="py-6">
          <Link to="/jobs" className="flex items-center gap-x-2">
            <span>
              <MdOutlineArrowBackIos />
            </span>
            Back
          </Link>
        </div>
      </div>
      {isLoading || isLoadingJobs ? (
        <div className="w-full container flex justify-center items-center">
          <Loader className="h-80 w-full" />
        </div>
      ) : (
        <div className="w-full container flex gap-4">
          <div className="w-2/3 flex flex-col gap-4 ">
            <div className=" w-full p-[30px] bg-white rounded-[15px]">
              <div className=" flex justify-between gap-4">
                <h1 className="text-2xl font-medium leading-[29.04px] text-left">{job?.job_title}</h1>
                <div className="flex gap-6 items-center">
                  <button onClick={onSaveAndUnsaved}>
                    {saveJobIds.includes(job?._id as string) ? <FillLike /> : <Like />}
                  </button>
                  <Button className="h-9" variant="primary">
                    Apply
                  </Button>
                </div>
              </div>
              <div className="py-6">
                <div className="w-full h-[1px] bg-neutral-100" />
              </div>
              <div className="flex justify-between gap-10">
                <div className="w-2/3 flex flex-col">
                  <div className="flex justify-between items-center">
                    <h5 className="text-sm font-medium leading-[22.4px] text-left text-[#7D7D7D]">Type of work</h5>
                    <h4 className="text-[#0b0b0b] text-sm font-medium font-['Inter Display'] leading-snug">Service</h4>
                  </div>
                  <div className="flex justify-between pt-2 items-center">
                    <h5 className="text-sm font-medium leading-[22.4px] text-left text-[#7D7D7D]">Employment Type</h5>
                    <h4 className="text-[#0b0b0b] text-sm font-medium font-['Inter Display'] leading-snug">
                      {job?.type_of_employment[0]}
                    </h4>
                  </div>
                  <div className="flex justify-between pt-2 items-center">
                    <h5 className="text-sm font-medium leading-[22.4px] text-left text-[#7D7D7D]">Working Hours</h5>
                    <h4 className="text-[#0b0b0b] text-sm font-medium font-['Inter Display'] leading-snug">
                      {job?.working_hours_start}-{job?.working_hours_end}
                    </h4>
                  </div>
                </div>
                <div className="w-0/3">
                  <div className="w-[1px] h-[82px] bg-neutral-100" />
                </div>
                <div className="w-2/3">
                  <div className="flex justify-between items-center">
                    <h5 className="text-sm font-medium leading-[22.4px] text-left text-[#7D7D7D]">Working Days</h5>
                    <h4 className="text-[#0b0b0b] text-sm font-medium font-['Inter Display'] leading-snug">
                      {job?.workday} days a week
                    </h4>
                  </div>
                  <div className="flex justify-between pt-2 items-center">
                    <h5 className="text-sm font-medium leading-[22.4px] text-left text-[#7D7D7D]">Working Place</h5>
                    <h4 className="text-[#0b0b0b] text-sm font-medium font-['Inter Display'] leading-snug">
                      {job?.working_place || '---'}
                    </h4>
                  </div>
                  <div className="flex justify-between pt-2 items-center">
                    <h5 className="text-sm font-medium leading-[22.4px] text-left text-[#7D7D7D]">Location</h5>
                    <h4 className="text-[#0b0b0b] text-sm font-medium font-['Inter Display'] leading-snug">
                      {job?.location || '---'}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-[30px] bg-white rounded-[15px]">
              <h1 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">Company Introduction</h1>
              <div className="pt-4">
                <p className="text-[16px] font-normal leading-[25.6px] text-left text-[#0C0C0C]">
                  <div dangerouslySetInnerHTML={{__html: `${job?.company?.description}`}}></div>
                </p>
              </div>
              <div className="pt-9 flex gap-3">
                <img className="w-[435px] border h-[254px] rounded-lg" src={job?.company?.images[0]} alt="" />
                <div className="flex flex-col  gap-3">
                  {job?.company?.images?.map((image: string, index: number) => (
                    <img
                      key={index}
                      className="w-[244px] border object-cover h-[121px] rounded-lg"
                      src={image}
                      alt=""
                    />
                  ))}
                </div>
              </div>
              <div className="pt-9">
                <h3 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">Responsibilities</h3>
                <div className="pt-4">
                  <div dangerouslySetInnerHTML={{__html: `${job?.responsibilities}`}}></div>
                </div>
              </div>
              <div className="pt-9">
                <h3 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">Benefits</h3>
                <div className="grid pt-4 grid-cols-1 xl:grid-cols-2 gap-y-[25px] ">
                  {BENEFIT?.filter(item => job?.benefit?.includes(item.name))?.map((item, index) => (
                    <label key={index} className="flex select-none items-center  gap-x-3">
                      <p className="text-[#0b0b0b] flex items-center gap-x-2.5 text-base font-normal font-['Inter Display'] leading-relaxed">
                        <span className="text-[#1289F8]">{item.icon}</span> {item.name}
                      </p>
                    </label>
                  ))}
                </div>
              </div>
              <div className="pt-9">
                <h3 className="text-[#0b0b0b] text-xl font-medium font-['Inter Display']">Qualifications</h3>
                <div className="grid pt-4 grid-cols-1 xl:grid-cols-2 gap-y-[25px] ">
                  {QUALIFICATIONS?.filter(item => job?.qualification?.includes(item.name))?.map((item, index) => (
                    <label key={index} className="flex select-none items-center  gap-x-3">
                      <p className="text-[#0b0b0b] flex items-center gap-x-2.5 text-base font-normal font-['Inter Display'] leading-relaxed">
                        <span className="text-[#1289F8]">{item.icon}</span> {item.name}
                      </p>
                    </label>
                  ))}
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
                <p className="text-base font-normal leading-6 text-left">{job?.company?.location}</p>
                <div className="pt-4 flex flex-col gap-y-1">
                  <h4 className="text-[16px] font-semibold leading-6 text-left">Contact</h4>
                  <p className="text-base font-normal leading-6 text-left">{job?.company?.phone_number}</p>
                </div>
                <div className="pt-4 flex flex-col gap-y-1">
                  <h4 className="text-[16px] font-semibold leading-6 text-left">Email</h4>
                  <p className="text-base font-normal leading-6 text-left">{job?.company?.email}</p>
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
                {jobs
                  ?.filter(item => item?._id !== job?._id)
                  .map((jobItem, index) => <JobItem key={index} job={jobItem as Job} />)}
                {next_page && (
                  <Button
                    loading={isFetchingJobs}
                    onClick={() => setPerPage(perPage + 5)}
                    variant="outline"
                    className=" px-6 py-2 font-medium"
                  >
                    Show more
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            <div
              onClick={() => navigate(`/jobs/${job?.company?._id}/company`)}
              className="w-full p-[20px] flex max-h-[80px] items-center gap-4 bg-white rounded-[15px]"
            >
              <img
                className="w-10 h-10 gap-0 opacity-[0px] object-cover border-[2px] rounded-full border-[#F5F5F5]"
                src={job?.company?.logo}
                alt={job?.company?.company_name}
              />
              <span className="text-base font-medium leading-[22.4px] text-left text-[#0C0C0C]">
                {job?.company?.company_name}
              </span>
            </div>
            <div className="w-full p-[20px] items-center gap-4 bg-white rounded-[15px]">
              <div className="flex justify-between pb-4">
                <h4 className="text-[#7d7d7d] text-base font-medium font-['Inter Display'] leading-snug">Salary</h4>
                <h3 className="text-[#0b0b0b] text-base font-semibold font-['Inter Display'] leading-snug">
                  {job?.salary_min.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}{' '}
                  -{' '}
                  {job?.salary_max.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </h3>
              </div>
              <div className="w-full h-[1px] bg-neutral-100" />
              <div className="flex py-5 flex-col gap-y-3">
                <div className="flex justify-between">
                  <h4 className="text-[#7d7d7d] text-base font-medium font-['Inter Display'] leading-snug">
                    Apply Before
                  </h4>
                  <h3 className="text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-relaxedt">
                    July 31, 2024
                  </h3>
                </div>
                <div className="flex justify-between">
                  <h4 className="text-[#7d7d7d] text-base font-medium font-['Inter Display'] leading-snug">
                    Job Posted On
                  </h4>
                  <h3 className="text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-relaxedt">
                    {dayjs(job?.created_at).format('MMM DD, YYYY')}
                  </h3>
                </div>
                <div className="flex justify-between">
                  <h4 className="text-[#7d7d7d] text-base font-medium font-['Inter Display'] leading-snug">Job Type</h4>
                  <h3 className="text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-relaxedt">
                    {job?.type_of_employment}
                  </h3>
                </div>
              </div>
              <div className="w-full h-[1px] bg-neutral-100" />
              <div className="pt-4">
                <h4 className="text-[#0b0b0b] text-base font-semibold font-['Inter Display'] leading-snug">
                  Visa Accepted
                </h4>
                <div className="flex pt-4 pb-5 gap-[6px] flex-wrap  ">
                  {job?.visa?.map(visa => (
                    <div className="py-[5px] px-[14px]  text-center rounded-[38px] bg-neutral-50  text-[#0b0b0b] text-sm font-normal font-['Inter Display'] leading-snug ">
                      {visa}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full h-[1px] bg-neutral-100" />
              <div className="pt-6">
                <h4 className="text-[#0b0b0b] text-base font-semibold font-['Inter Display'] leading-snug">
                  Required Skills
                </h4>
                <div className="flex flex-wrap gap-[6px] pt-4 pb-5 ">
                  {job?.required_skills?.map(skill => (
                    <div className="py-[5px] px-[14px]  text-center rounded-[38px] bg-neutral-50  text-[#0b0b0b] text-sm font-normal font-['Inter Display'] leading-snug ">
                      {skill}
                    </div>
                  ))}
                </div>
                <Button variant="primary" className="w-full mt-6">
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
