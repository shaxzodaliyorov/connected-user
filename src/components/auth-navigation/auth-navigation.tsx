import {FC} from 'react'
import {GoArrowLeft} from 'react-icons/go'
import {AuthNavigationProps} from './types'

export const AuthNavigation: FC<AuthNavigationProps> = ({onClick, title}) => (
  <div className="flex justify-between">
    <button onClick={onClick} className="hover:text-gray-600">
      <GoArrowLeft className="w-[30px] h-[30px]" />
    </button>
    <p className="text-center text-[#0b0b0b] text-2xl font-medium font-['Inter Display'] leading-relaxed">{title}</p>
    <div />
  </div>
)
