import {NotesProps} from './types'

export const Notes: React.FC<NotesProps> = ({steps}) => (
    <section className="cursor-pointer relative">
      <div className="w-[90%] container flex justify-between">
        <div className="w-[87%] top-[18px] absolute h-[1px] bg-[#1289F8] z-0 left-10" />
        {steps.map((step: {title: any; content: any}, index: number) => (
          <div className="flex flex-col text-center">
            <div
              key={index}
              className="border border-[#1289F8] w-[75px] py-2 text-center items-center rounded-[27px] text-sm bg-white z-20"
            >
              {step?.title}
            </div>
            <p className="text-[#7D7D7D] text-sm pt-2">{step?.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
