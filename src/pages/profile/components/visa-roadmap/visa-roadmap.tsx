import {MainCard} from '@/components/main-card'
import {useState} from 'react'

const VISA_STAGES = ['D-10', 'E-7', 'F-2', 'F-5']

export const VisaRoadmap = () => {
  const [currentStage] = useState('E-7')

  const progressWidth = `${(VISA_STAGES.indexOf(currentStage) / (VISA_STAGES.length - 1)) * 100}%`

  return (
    <MainCard>
      <h1 className="text-[#0b0b0b] text-xl font-medium font-['Inter Display'] leading-snug">Visa Roadmap</h1>
      <div className="pt-4">
        <div className="bg-neutral-100 flex justify-between items-center px-2.5 relative rounded-[30px] w-full h-10 ">
          {VISA_STAGES.map((_, index) => (
            <div key={index} className="w-6 h-6 bg-white z-10 rounded-full border"></div>
          ))}
          <div
            style={{
              width: progressWidth,
            }}
            className="h-8 px-[6px] left-1 visa_road_map_bg absolute top-1/2 -translate-y-1/2 rounded-[30px]"
          ></div>
        </div>
        <div className="w-full px-2.5 pt-4 flex justify-between">
          {VISA_STAGES.map((stage, index) => (
            <p key={index} className=" text-center text-[#0b0b0b] text-base font-medium font-['Inter Display']">
              {stage}
            </p>
          ))}
        </div>
      </div>
    </MainCard>
  )
}