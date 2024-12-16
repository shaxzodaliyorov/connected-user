import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from '@/components/ui/accordion'
import {Props} from './types'
import {useState} from 'react'
import {FaPlus} from 'react-icons/fa'

export const QuestionCard: React.FC<Props> = ({title, content}) => {
  const [open, setOpen] = useState(false)
  return (
    <section className="w-full">
      <Accordion type="single" collapsible className="w-full" onValueChange={value => setOpen(value === 'item-1')}>
        <AccordionItem value="item-1" className="bg-white rounded-[15px] p-6">
          <AccordionTrigger iconClassName="hidden" className="text-xl font-medium leading-7 text-left text-[#0C0C0C]">
            {title}
            <button
              aria-label="Toggle"
              onClick={() => setOpen(!open)}
              className="p-1 border-[2px] border-[#0C0C0C] rounded-full"
            >
              <FaPlus className={`transition-transform ${open ? 'rotate-45' : ''}`} />
            </button>
          </AccordionTrigger>
          <AccordionContent className="w-[85%] mt-4 text-[16px] font-normal leading-6 text-left text-[#0C0C0C]">
            {content}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
