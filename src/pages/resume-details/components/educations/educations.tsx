import {Button} from '@/components'
import {MainCard} from '@/components/main-card'
import {AddResume} from '@/icons'
import {useTranslation} from 'react-i18next'
import {Props} from '../my-resume/types'
import {useState} from 'react'
import {ListItem} from './components'

export const Educations = ({resume}: Props) => {
  const {t} = useTranslation()
  const [showMore, setShowMore] = useState(false)
  const displayedEducations = showMore ? resume?.education : resume?.education?.slice(0, 3)
  return (
    <MainCard className="mt-4">
      <div className="flex gap-x-2 items-center">
        <h4 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">{t('Educations')}</h4>
        <AddResume className="text-[#0062FF]" />
      </div>
      <div className="py-6">
        <div className="w-full h-px bg-[#F5F5F5]" />
      </div>
      {displayedEducations?.map((education, index) => <ListItem education={education} key={index} />)}
      <Button
        fullWidth
        variant="secondary"
        onClick={() => setShowMore(!showMore)}
        className="bg-white hover:bg-white text-base mt-6 font-medium leading-[25.6px] text-center h-5 text-[#0062FF]"
      >
        Show 3 more experiences
      </Button>
    </MainCard>
  )
}
