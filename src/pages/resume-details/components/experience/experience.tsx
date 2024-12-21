import {Button} from '@/components'
import {MainCard} from '@/components/main-card'
import {AddResume} from '@/icons'
import {useTranslation} from 'react-i18next'
import {Props} from '../my-resume/types'
import {useState} from 'react'
import {ItemList} from './components'

export const Experiences = ({resume}: Props) => {
  const {t} = useTranslation()
  const [showMore, setShowMore] = useState(false)
  const displayedExperiences = showMore ? resume?.experience : resume?.experience?.slice(0, 3)

  return (
    <MainCard className="mt-4">
      <div className="flex gap-x-2 items-center">
        <h4 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">{t('Experience')}</h4>
        <AddResume className="text-[#0062FF]" />
      </div>
      <div className="py-6">
        <div className="w-full h-px bg-[#F5F5F5]" />
      </div>

      {displayedExperiences?.map((experience, index) => (
        <ItemList resume={resume} experience={experience} key={index} />
      ))}

      <Button
        fullWidth
        onClick={() => setShowMore(!showMore)}
        variant="secondary"
        className="bg-white hover:bg-white text-base font-medium leading-[25.6px] text-center h-5 text-[#0062FF]"
      >
        {showMore
          ? t('Show 3 more experiences')
          : `${t('Show')} ${resume.experience.length + 3} ${t('more experiences')}`}
      </Button>
    </MainCard>
  )
}
