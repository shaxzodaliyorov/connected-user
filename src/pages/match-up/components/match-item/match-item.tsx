import {FillLike, Like} from '@/icons'
import {FC} from 'react'
import {useNavigate} from 'react-router-dom'
import {Props} from './types'
import {Button} from '@/components'
import {MatchProgress} from '../match-progress'
import {useGetUser, useHandleRequest} from '@/hooks'
import {useGetSaveJobIdsQuery, useSaveJobMutation} from '@/features/jobs'
import {useTranslation} from 'react-i18next'
import {toast} from '@/components/ui/use-toast'

export const MatchItem: FC<Props> = ({job}) => {
  const navigate = useNavigate()

  const handleRequest = useHandleRequest()
  const [saveJob] = useSaveJobMutation()
  const {data: {data: saveJobIds = []} = {}} = useGetSaveJobIdsQuery('')
  const {t} = useTranslation()
  const user = useGetUser()

  const onSaveAndUnsaved = async () => {
    if (!user) {
      navigate('/sign-in')
      return
    }

    await handleRequest({
      request: async () => {
        const response = await saveJob({
          id: job?.job_id,
          type: saveJobIds.includes(job?.job_id) ? 'unfavorite' : 'favorite',
        })
        return response
      },
      onSuccess: () => {
        toast({title: saveJobIds.includes(job?.job_id) ? t('Job Unsaved') : t('Job Saved'), variant: 'default'})
      },
    })
  }

  return (
    <div
      className="w-full bg-white rounded-[15px] p-[30px] cursor-pointer relative"
      onClick={() => navigate(`/jobs/${job?.job_id}`)}
    >
      <div className="flex justify-between ">
        <div className="flex gap-4 items-center">
          <img className="w-[60px] h-[60px] rounded-[15px] border-[2px]" src={job?.company_logo} alt="" />
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold leading-[30px] text-left text-[#0C0C0C]">{job?.job_title}</h4>
            <p className="text-base flex items-center gap-x-2 font-normal leading-[19.2px] text-left text-[#7D7D7D]">
              {job.company_name} <span>·</span> <p>{job.company_location}</p>
              {/* <span>·</span> */}
              {/* <span className="text-base font-normal leading-6 text-left text-[#0C0C0C]">
                {job?.salary_min?.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                })}{' '}
                -{' '}
                {job?.salary_max?.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                })}
              </span> */}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <MatchProgress percentage={Number(Math.floor(job.percent))} />
          <button
            className="absolute z-[9] right-6 top-6 "
            onClick={e => {
              e.stopPropagation()
              onSaveAndUnsaved()
            }}
          >
            {saveJobIds && saveJobIds.includes(job?.job_id as string) ? <FillLike /> : <Like />}
          </button>
        </div>
      </div>
      <div className="pt-4 flex justify-between">
        <p className="text-base font-normal flex items-center gap-x-1 leading-[19.2px] text-left text-[#7D7D7D]">
          {job?.type_of_employment?.map((item: string, index) => (
            <>
              {index !== 0 && <span>·</span>}
              <span>{item}</span>
            </>
          ))}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="pt-6">
          <Button variant="primary" className="py-2 px-[44px]">
            Apply
          </Button>
        </div>
        <p className="text-base font-normal leading-[19.2px] mt-6 text-left text-[#7D7D7D]">
          {/* {new Date(job?.).toLocaleDateString('en-US')} */}
          {/* {formatTimeAgo(job.)} */}
        </p>
      </div>
    </div>
  )
}
