import {FillLike, Like} from '@/icons'
import {FC} from 'react'
import {useNavigate} from 'react-router-dom'
import {Props} from './types'
import {formatTimeAgo} from '@/utils'
import {useGetSaveJobIdsQuery, useSaveJobMutation} from '@/features/jobs'
import {useGetUser, useHandleRequest} from '@/hooks'
import {useTranslation} from 'react-i18next'
import {toast} from '@/components/ui/use-toast'

export const JobItem: FC<Props> = ({job}) => {
  const handleRequest = useHandleRequest()
  const [saveJob] = useSaveJobMutation()
  const {data: {data: saveJobIds = []} = {}} = useGetSaveJobIdsQuery('')
  const {t} = useTranslation()
  const user = useGetUser()
  const navigate = useNavigate()

  const onSaveAndUnsaved = async () => {
    if (!user) {
      navigate('/sign-in')
      return
    }

    await handleRequest({
      request: async () => {
        const response = await saveJob({
          id: job?._id,
          type: saveJobIds.includes(job?._id) ? 'unfavorite' : 'favorite',
        })
        return response
      },
      onSuccess: () => {
        toast({title: saveJobIds.includes(job?._id) ? t('Job Unsaved') : t('Job Saved'), variant: 'default'})
      },
    })
  }

  return (
    <div
      className="w-full bg-white rounded-[15px] p-[30px] cursor-pointer relative"
      onClick={() => navigate(`/jobs/${job?._id}`)}
    >
      <div className="flex justify-between ">
        <div className="flex gap-4 items-center">
          <img className="w-[60px] h-[60px] rounded-[15px] border-[2px]" src={job?.images[0]} alt="" />
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold leading-[30px] text-left">{job?.job_title}</h4>
            <p className="text-base flex items-center gap-x-2 font-normal leading-[19.2px] text-left text-[#7D7D7D]">
              {job.company.company_name} <span>·</span> <p>{job.nationality}</p>
              <span>·</span>
              <span className="text-base font-normal leading-6 text-left text-[#0C0C0C]">
                $
                {job?.salary_min?.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}{' '}
                - $
                {job?.salary_max?.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </span>
            </p>
          </div>
        </div>
        <button
          className="absolute z-[9] right-6 top-6 "
          onClick={e => {
            e.stopPropagation()
            onSaveAndUnsaved()
          }}
        >
          {saveJobIds && saveJobIds.includes(job?._id as string) ? <FillLike /> : <Like />}
        </button>
      </div>
      <div className="pt-4 flex justify-between">
        <p className="text-base font-normal flex items-center gap-x-1 leading-[19.2px] text-left text-[#7D7D7D]">
          {/* Experience from 3 to 6 years */}
          {job?.visa?.map((item: string) => (
            <>
              <span>{item}</span>{' '}
            </>
          ))}
          {job?.type_of_employment?.map((item: string) => (
            <>
              <span>·</span>
              <span>{item}</span>{' '}
            </>
          ))}
        </p>
        <p className="text-base font-normal leading-[19.2px] text-left text-[#7D7D7D]">
          Posted {formatTimeAgo(job?.created_at as any)}
        </p>
      </div>
    </div>
  )
}
