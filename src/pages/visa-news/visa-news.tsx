import {Button, Input} from '@/components/common'
import {IoSearch} from 'react-icons/io5'
import {Card} from './components'
import {VISA_UPDATES} from '@/mock'
import {useNavigate} from 'react-router-dom'

export const VisaNews = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full">
      <div className="w-full container m-auto bg-white p-[30px] rounded-[15px]">
        <div className="flex">
          <Input leftIcon={<IoSearch size={20} />} inputSizeClassName="h-12 pl-10" placeholder="Search" fullWidth />
          <Button className="ml-3 px-8 h-12">Search</Button>
        </div>
        <div className="w-full pt-[25px] justify-between">
          <h4 className="text-2xl font-semibold leading-[29.04px] text-left text-[#0C0C0C]">
            Visa News <span className="text-[#C5C5C5] font-normal">∙ 97</span>
          </h4>
        </div>
      </div>
      <div className="w-full container pt-4">
        <div className="grid grid-cols-3 gap-5">
          {VISA_UPDATES.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              category={card.category}
              date={card.date}
              imageUrl={card.imageUrl}
              onClick={() => navigate(`/visa-new/${card.id}`)}
            />
          ))}
        </div>
        <Button
          fullWidth
          variant="outline"
          className="mt-6 px-8 h-12 text-primary border-primary hover:bg-[#f3f3f3] hover:text-primary"
        >
          Show more
        </Button>
      </div>
    </section>
  )
}
