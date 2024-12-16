import {MainCard} from '../main-card'
import {Props} from './types'

export const Card: React.FC<Props> = ({title, salary, location, status, key}) => (
    <MainCard key={key} className="flex justify-between items-start">
      <div className="flex items-center gap-x-4">
        <div className="border-[2px] border-gray-200 rounded-full">
          <img src="https://via.placeholder.com/50" alt="Company Logo" className="w-[68px] h-[68px] rounded-full" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
          <div className="pt-1">
            <p className="text-gray-500">{salary}</p>
          </div>
          <div className="pt-4">
            <p className="text-gray-400 text-sm">{location}</p>
          </div>
        </div>
      </div>
      <span
        className={`text-sm font-semibold px-4 py-1 rounded-lg uppercase ${
          status === 'Applied' ? 'bg-[#0062FF1A] text-' : 'bg-[#1289F8] text-white'
        }`}
      >
        {status}
      </span>
    </MainCard>
  )
