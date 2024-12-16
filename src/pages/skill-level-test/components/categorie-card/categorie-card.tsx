import {Props} from './types'

export const CategoryCard: React.FC<Props> = ({icon, title, description}) => (
    <div className="w-[272px] h-[280px] rounded-[15px] bg-white p-5">
      <div className="p-[15px] w-[60px] text-[#fff] bg-[#0062FF] gap-0 opacity-[0.05px] rounded-[15px] left-[172px] top-[726px]">
        {icon}
      </div>
      <div className="pt-[44px]">
        <h4 className="text-xl font-semibold line-clamp-1">{title}</h4>
      </div>
      <div className="pt-4">
        <h4 className="text-[16px] text-[#7D7D7D] line-clamp-4 font-normal">{description}</h4>
      </div>
    </div>
  )
