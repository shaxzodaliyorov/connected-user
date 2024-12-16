import {NotesProps} from './types'

export const Notes: React.FC<NotesProps> = ({steps}) => (
  <section className="flex relative pr-[60px] justify-between">
    {steps.map((step: string, index: number) => (
      <div className="flex flex-col items-center">
        <div
          key={index}
          className="ext-[#0b0b0b] z-[2] bg-white text-xs font-medium font-['Inter Display'] w-[74px] py-[7px] bg-white rounded-[27px] border border-[#1289f8] justify-center items-center gap-2.5 flex"
        >
          Step {index + 1}
        </div>
        <p className=" mt-3 text-center text-[#0b0b0b] text-sm font-normal font-['Inter Display'] leading-snug">
          {step}
        </p>
      </div>
    ))}
    <div className="w-[80%] translate-x-1/2  -left-[30%] absolute top-[25%]  -translate-y-1/2 h-px bg-[#1289f8]"></div>
  </section>
)
