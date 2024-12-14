import {Button} from '@/components/common'
import {useNavigate} from 'react-router-dom'

export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex gap-3 pt-[142px]">
        <h1 className="text-[240px] text-[#C5C5C5] italic font-medium leading-[290.39px] text-left">4</h1>
        <img src={'../public/images/404.svg'} alt="" />
        <h1 className="text-[240px] text-[#C5C5C5] italic font-medium leading-[290.39px] text-left">4</h1>
      </div>
      <h3 className="text-[#0C0C0C] text-2xl font-medium leading-[29.04px] text-left">Oops, something went wrong...</h3>
      <p className="text-[#0C0C0C] text-xl font-normal leading-[30px] text-center pt-2">
        Please refresh the page or return to the home page.
      </p>
      <Button onClick={() => navigate('/')} className="py-3 px-16 mt-5">
        Back Home
      </Button>
    </div>
  )
}
