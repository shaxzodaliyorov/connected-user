import React from 'react'
import {Props} from './types'

import {motion} from 'framer-motion'
import {Progress} from '@/components/ui/progress'

export const ProfileProgress: React.FC<Props> = ({progress}) => (
  <div className="flex flex-col pt-4">
    <span className="text-base font-medium leading-[19.36px] text-left">{progress}</span>
    <motion.div
      initial={{width: 50}}
      animate={{width: `${progress}`}}
      transition={{duration: 1}}
      className="relative w-full h-2 mt-2"
    >
      <Progress color="bg-green-500" value={100} className="bg-green-500" />
    </motion.div>
  </div>
)
