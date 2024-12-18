import {NoMatch as NoMatchIcon} from '@/icons'
export const NoMatch = () => (
  <section className="w-full">
    <div className="w-full container">
      <div className="py-[150px]">
        <NoMatchIcon className="mx-auto text-[#7D7D7D] " />
        <h1 className="text-center text-[#0b0b0b] mt-6 text-2xl font-normal font-['Inter Display'] leading-[33.60px]">
          No current job matches
        </h1>
      </div>
    </div>
  </section>
)
