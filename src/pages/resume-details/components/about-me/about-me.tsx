import {MainCard} from '@/components/main-card'
import {Pencil} from '@/icons'
import {Props} from '../my-resume/types'
import {useTranslation} from 'react-i18next'

export const AboutMe = ({resume}: Props) => {
  const {t} = useTranslation()
  return (
    <MainCard className="mt-4">
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">{t('About Me')}</h4>
        <div className=" bg-[#FFFFFF] rounded-full text-[#0062FF]">
          <Pencil />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-y-7">
        <p className="w-[90%] text-wrap  text-base font-normal leading-[25.6px] text-left text-[#0C0C0C]">
          {resume?.about_me}
        </p>
      </div>
    </MainCard>
  )
}
