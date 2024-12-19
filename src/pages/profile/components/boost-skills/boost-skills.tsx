import {Button} from '@/components'
import {MainCard} from '@/components/main-card'
import {StartNow} from '@/icons'
import {IoReload} from 'react-icons/io5'

export const BoostSkills = () => (
  <MainCard>
    <h1 className="text-left text-[#0b0b0b] text-xl font-medium font-['Inter Display'] leading-snug">
      Boost Your Skills for Korea
    </h1>
    <p className="text-left mt-[6px] text-[#0b0b0b] text-[15px] font-normal font-['Inter Display'] leading-normal">
      Boost your language skills for visa readiness.
    </p>
    <div className="flex pt-6 items-center gap-x-3">
      <Button size="sm" leftIcon={<StartNow />}>
        Start now
      </Button>
      <Button
        size="sm"
        className="bg-transparent text-[#0062ff] hover:bg-[#0062ff] hover:text-white"
        leftIcon={<IoReload />}
      >
        Fill out the form
      </Button>
    </div>
  </MainCard>
)
