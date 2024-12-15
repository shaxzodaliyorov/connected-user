import {useNavigate} from 'react-router-dom'
import {Props} from './types'

export const All: React.FC<Props> = ({children}) => {
  const navigate = useNavigate()
  return (
    <section className="w-full">
      <div className="w-full container flex flex-col gap-y-4">
        {children.map((item, index) => (
          <div
            key={index}
            className="w-full p-[20px] bg-white rounded-[15px]"
            onClick={() => navigate(`/notification/1`)}
          >
            <div className="flex justify-between items-center">
              <h1 className="w-3/4 text-[#0C0C0C] text-2xl font-medium leading-[30px]">{item.title}</h1>
              {item.is_read ? ' ' : <span className="w-[10px] h-[10px] bg-[#12B76A] rounded-full"></span>}
            </div>
            <div className="flex justify-between items-end pt-4">
              <p className="w-3/4 text-[#7D7D7D] text-base font-normal leading-[19.2px]">{item.description}</p>
              <p className="text-[#7D7D7D] text-base font-normal leading-[19.2px]">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
