import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'
import {Select} from '../common'
import {useGetFilterData} from '@/hooks'

export const Filter = () => {
  const {allCategoryFilterData, isLoading} = useGetFilterData()

  console.log(
    allCategoryFilterData
      .find(item => item.value === 'category')
      ?.subCategories.map(item => ({label: item, value: item})),
  )

  return (
    <div className="w-full min-h-[1178px] p-5 rounded-[15px] bg-white">
      <h1 className="text-[#0b0b0b] text-lg font-medium font-['Inter Display'] leading-snug">Filter</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p className="text-[#0b0b0b] text-base font-medium font-['Inter Display'] leading-tight">Job Category</p>
          </AccordionTrigger>
          <AccordionContent>
            <Select
              wrapperClassName="h-[36px] rounded-lg"
              placeholder="Job Category"
              options={
                allCategoryFilterData
                  .find(item => item.value === 'category')
                  ?.subCategories.map(item => ({label: item, value: item})) || []
              }
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <p className="text-[#0b0b0b] text-base font-medium font-['Inter Display'] leading-tight">Location</p>
          </AccordionTrigger>
          <AccordionContent>
            <Select
              wrapperClassName="h-[36px] rounded-lg"
              placeholder="Job Category"
              options={
                allCategoryFilterData
                  .find(item => item.value === 'category')
                  ?.subCategories.map(item => ({label: item, value: item})) || []
              }
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
