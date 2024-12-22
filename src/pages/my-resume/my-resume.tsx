import {Loader} from '@/components/loader'
import {useGetAllMyResumeQuery} from '@/features/resume/resume'
import {AddResume, Transition, UserIcons, WarningIcon} from '@/icons'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import {Link, useNavigate} from 'react-router-dom'
import {ListItem} from './components'
import {Resume} from '@/types'
import {useTranslation} from 'react-i18next'

export const MyResume = () => {
  const {data: {data: resumes = []} = {}, isLoading} = useGetAllMyResumeQuery('')
  const navigate = useNavigate()
  const {t} = useTranslation()

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
          <button
            onClick={() => navigate('/add-resume')}
            className="flex items-center text-base font-medium leading-5 text-left gap-[6px] text-[#0062FF] mr-6"
          >
            <AddResume />
            {t('Add Resume')}
          </button>
        </div>
        <div className="w-full flex gap-4 items-start">
          <div className="w-[80%]">
            <div className="flex flex-col gap-y-4">
              {isLoading ? (
                <Loader className="h-80 flex items-center justify-center" />
              ) : (
                resumes?.map((resume: Resume) => <ListItem key={resume._id} resumeItem={resume} />)
              )}
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
