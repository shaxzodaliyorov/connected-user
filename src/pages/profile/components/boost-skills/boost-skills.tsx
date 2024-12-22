import {Button} from '@/components'
import {MainCard} from '@/components/main-card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {StartNow} from '@/icons'
import {IoReload} from 'react-icons/io5'
import {useNavigate} from 'react-router-dom'

export const BoostSkills = () => {
  const navigate = useNavigate()
  return (
    <Dialog>
      <MainCard>
        <h1 className="text-left text-[#0b0b0b] text-xl font-medium font-['Inter Display'] leading-snug">
          Boost Your Skills for Korea
        </h1>
        <p className="text-left mt-[6px] text-[#0b0b0b] text-[15px] font-normal font-['Inter Display'] leading-normal">
          Boost your language skills for visa readiness.
        </p>
        <div className="flex pt-6 items-center gap-x-3">
          <DialogTrigger>
            <Button size="sm" leftIcon={<StartNow />}>
              Start now
            </Button>
          </DialogTrigger>
          <Button
            size="sm"
            className="bg-transparent text-[#0062ff] hover:bg-[#0062ff] hover:text-white"
            leftIcon={<IoReload />}
          >
            Fill out the form
          </Button>
        </div>
      </MainCard>
      <DialogContent className="bg-transparent border-transparent shadow-transparent">
        <DialogHeader className="">
          <DialogTitle className="">
            <h4 className="text-xl font-medium leading-[22px] text-center text-[#0C0C0C]">
              Boost Your Skills for Korea
            </h4>
            <p className="text-base font-normal leading-6 text-center mt-[6px]">
              Boost your language skills for visa readiness.
            </p>
            <Button onClick={() => navigate('/start-now')} size="sm" className="m-auto mt-6" leftIcon={<StartNow />}>
              Start now
            </Button>
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
