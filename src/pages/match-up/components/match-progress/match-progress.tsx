import {motion} from 'framer-motion'
import React from 'react'
import {Props} from './types'

export const MatchProgress: React.FC<Props> = ({percentage}) => {
  const radius = 25
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div
      className="relative -top-2 right-6  w-[64px] h-[64px] flex items-center justify-center"
      style={{borderRadius: '18px', overflow: 'hidden'}}
    >
      <svg width="64" height="64">
        <circle cx="32" cy="32" r={radius} stroke="#e6e6e6" strokeWidth="5" fill="none" />
      </svg>
      <svg className="absolute top-0 left-0" width="64" height="64" style={{transform: 'rotate(-90deg)'}}>
        <motion.circle
          cx="32"
          cy="32"
          r={radius}
          stroke="#2563eb"
          strokeWidth="5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          initial={{strokeDashoffset: circumference}}
          animate={{strokeDashoffset}}
          transition={{duration: 1}}
        />
      </svg>
      <div className="absolute text-center text-blue-600 text-[12px] font-semibold">
        {percentage}%
        <div className="text-center text-[#7d7d7d] text-[8px] font-normal font-['Inter Display'] leading-[10.80px]">
          AI Match
        </div>
      </div>
    </div>
  )
}
