import {AddResume} from '@/icons'
import {Props} from './types'

export const Information: React.FC<Props> = ({text, title}) => (
  <div className="p-5 rounded-[15px] bg-white flex flex-col gap-y-8">
    <div className="w-full flex justify-center gap-[162px] items-center">
      <h2 className="text-2xl font-semibold leading-9 text-left text-[#0C0C0C]">{title}</h2>
      <AddResume className="text-[#737373]" />
    </div>
    <p className="text-xl font-normal leading-7 text-left text-[#737373]">{text}</p>
  </div>
)
