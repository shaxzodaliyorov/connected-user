import {Button} from '@/components'
import {MainCard} from '@/components/main-card'
import {ArrowRight} from '@/icons/arrow-right'
import {useNavigate} from 'react-router-dom'

export const CreateResume = () => {
  const navigate = useNavigate()
  return (
    <MainCard className="flex items-center relative justify-between">
      <div>
        <h1 className="text-[#0b0b0b] text-xl font-semibold font-['Inter Display'] leading-snug">
          Build your resume easily.
        </h1>
        <p className="text-[#0b0b0b] mt-[6px] text-base font-normal font-['Inter Display'] leading-normal">
          Boost your job search success!
        </p>
        <div className="pt-[32px]">
          <Button onClick={() => navigate('/add-resume')} rightIcon={<ArrowRight />} size="sm">
            Add Resume
          </Button>
        </div>
      </div>
      <img src="/images/folder-profile.svg" className="absolute right-0 bottom-0" />
    </MainCard>
  )
}
