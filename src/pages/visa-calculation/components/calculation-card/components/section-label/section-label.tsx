import {Props} from './types'

export const SectionLabel = ({title, point}: Props) => (
  <div className="flex items-center justify-between">
    <h1 className="text-[color:var(--black-main,#161C1C)] text-lg not-italic font-medium leading-[160%]">{title}</h1>
    <p className="text-[#6E86FF] text-xl not-italic font-semibold leading-[160%]">{point}p</p>
  </div>
)
