/* eslint-disable object-shorthand */
import React from 'react'
import {Props} from './types'
import {useGetUser, useHandleRequest} from '@/hooks'
import {useGetSaveJobIdsQuery, useSaveJobMutation} from '@/features/jobs'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'
import {toast} from '../ui/use-toast'
import {FillLike, Like} from '@/icons'
import {formatTimeAgo} from '@/utils'

export const JobCard: React.FC<Partial<Props>> = ({
  logo,
  company,
  salary_min,
  salary_max,
  id,
  job_title,
  visa,
  type_of_employment,
  created_at,
  location,
}) => {
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
          id: id!,
          type: saveJobIds.includes(id as string) ? 'unfavorite' : 'favorite',
        })
        return response
      },
      onSuccess: () => {
        toast({title: saveJobIds.includes(id as string) ? t('Job Unsaved') : t('Job Saved'), variant: 'default'})
      },
    })
  }

  return (
    <div
      className="w-full bg-white rounded-[15px] p-[30px] cursor-pointer relative"
      onClick={() => navigate(`/jobs/${id}`)}
    >
      <div className="flex justify-between ">
        <div className="flex gap-4 items-center">
          <img className="w-[60px] h-[60px] rounded-full border border-neutral-100" src={logo} alt={''} />
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold leading-[30px] text-left">{job_title}</h4>
            <p className="text-base flex items-center gap-x-2 font-normal leading-[19.2px] text-left text-[#7D7D7D]">
              {company} <span>·</span> <p>{location || '---'}</p>
              {salary_min && salary_max && (
                <>
                  <span>·</span>(
                  <span className="text-base font-normal leading-6 text-left text-[#0C0C0C]">
                    $
                    {salary_min?.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}{' '}
                    - $
                    {salary_max?.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}
                  </span>
                  )
                </>
              )}
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
          {saveJobIds && saveJobIds.includes(id as string) ? <FillLike /> : <Like />}
        </button>
      </div>
      <div className="pt-4 flex justify-between">
        <p className="text-base font-normal flex items-center gap-x-1 leading-[19.2px] text-left text-[#7D7D7D]">
          {visa?.map((item: string) => (
            <>
              <span>{item}</span>{' '}
            </>
          ))}
          {type_of_employment?.map((item: string, index) => (
            <>
              {type_of_employment?.length > 1 && index > 0 && <span>·</span>}
              <span>{item}</span>
            </>
          ))}
        </p>
        {created_at && (
          <p className="text-base font-normal leading-[19.2px] text-left text-[#7D7D7D]">
            Posted {formatTimeAgo(created_at as any)}
          </p>
        )}
      </div>
    </div>
  )
}
