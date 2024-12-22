import {MainCard} from '@/components/main-card'
import {AddResume, Pencil} from '@/icons'
import {useTranslation} from 'react-i18next'
import {Props} from '../my-resume/types'

export const Skills = ({resume}: Props) => {
  const {t} = useTranslation()
  return (
    <MainCard className="mt-4">
      <div className="flex justify-between">
        <div className="flex gap-x-[10px] items-center">
          <h4 className="text-xl font-medium leading-[24.2px] text-left text-[#0C0C0C]">{t('Skills')}</h4>
          <AddResume className="text-[#0062FF]" />
        </div>
        <div className=" bg-[#FFFFFF] rounded-full text-[#0062FF]">
          <Pencil />
        </div>
      </div>
      <div className="flex gap-2 flex-wrap mt-[29px]">
        {resume?.skills?.map(skill => (
          <p key={skill} className="py-[6px] px-[10px] bg-[#F5F5F5] rounded-[8px]">
            {skill}
          </p>
        ))}
      </div>
    </MainCard>
  )
}
