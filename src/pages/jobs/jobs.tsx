import {Button} from '@/components/common'
import {Like} from '@/icons'
import {useNavigate} from 'react-router-dom'

export const Jobs = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full">
      <div className="w-full container flex gap-4">
        <div className="w-[20%] p-[30px] min-h-screen bg-white rounded-[15px]"></div>
        <div className="w-[80%]  flex flex-col gap-4">
          {new Array(10).fill(1).map((_, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-[15px] p-[30px] cursor-pointer relative"
              onClick={() => navigate('/jobs/1')}
            >
              <div className="flex justify-between ">
                <div className="flex gap-4 items-center">
                  <img
                    className="w-[60px] h-[60px] rounded-[15px] border-[2px]"
                    src="https://bsmedia.business-standard.com/_media/bs/img/about-page/1562575696.png?im=FitAndFill=(826,465)"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h4 className="text-xl font-semibold leading-[30px] text-left">Middle UI Designer</h4>
                    <p className="text-base font-normal leading-[19.2px] text-left text-[#7D7D7D]">
                      Samsung <span>·</span>Jung-gu, Seoul <span>·</span>{' '}
                      <span className="text-base font-normal leading-6 text-left text-[#0C0C0C]">$125K - $140K </span>
                    </p>
                  </div>
                </div>
                <button className="absolute z-[9] right-6 top-6 " onClick={() => alert('salom')}>
                  <Like />
                </button>
              </div>
              <div className="pt-4 flex justify-between">
                <p className="text-base font-normal leading-[19.2px] text-left text-[#7D7D7D]">
                  Experience from 3 to 6 years <span>·</span> D-10 <span>·</span> Full-Time <span>·</span> Remote
                </p>
                <p className="text-base font-normal leading-[19.2px] text-left text-[#7D7D7D]">Posted 1 day ago</p>
              </div>
            </div>
          ))}
          <Button variant="outline" className=" px-6 py-2 font-medium">
            Show more
          </Button>
        </div>
      </div>
    </section>
  )
}
