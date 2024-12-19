import {SaveIcon} from '@/icons/save'
import {Props} from './types'
import {getRandomColor} from '@/utils'
import {motion} from 'framer-motion'

export const Card = ({image, title, company, description, onClick, onSaveClick}: Props) => {
  const color = getRandomColor()

  const cardVariants = {
    hidden: {opacity: 0, scale: 0.8},
    show: {opacity: 1, scale: 1, transition: {duration: 0.4}},
  }

  return (
    <motion.div
      style={{borderColor: color, ['--border-color']: `${color}`} as any}
      className="border-2 card_hover shadow-lg overflow-hidden my-[15px] rounded-[4px] xl:rounded-[14px] w-full relative cursor-pointer border-solid"
      variants={cardVariants}
    >
      <button onClick={onSaveClick} style={{color}} className="absolute z-50 right-2.5 top-2.5 xl:right-5 xl:top-5">
        <SaveIcon className="w-6 h-6" />
      </button>
      <img src={image} className=" cursor-default h-[81px] xl:h-[159px] w-full" alt={title} />
      <div onClick={onClick} className="px-2 xl:px-5 pb-[22px]">
        <h3 className="text-xl mt-[10px] text-[#6E86FF] font-normal lg:leading-[23.87px] text-left">{company}</h3>
        <h1 className=" text-base xl:text-2xl font-medium lg:leading-[28.64px] mt-[5px] text-left">{title}</h1>
        <hr className="my-[15px] bg-[#BFBFBFE5]" />
        <p className="line-clamp-2 md:line-clamp-3 xl:line-clamp-3 text-[#6C6C6C] text-[14px] xl:text-base font-normal lg:leading-[19.09px] text-left">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
